#!/usr/bin/env python
# coding=utf-8

import hashlib
import json
from logger import get_logger
import requests
import time

from util import get_he, gen_sign

BASE_URL = "https://api.douchacha.com"

DEFAULT_TIMEOUT = 10

log = get_logger(__name__)


class DouChaCha:

    def __init__(self):
        self.header = {
            "origin": "https://api.douchacha.com",
            "content-type": "application/json",
        }

        self.session = requests.Session()

    def query_param(self, path):
        ts = int(time.time() * 1000)
        sign = gen_sign(path + str(ts))
        param = {
            "ts": ts,
            "sign": sign
        }
        return param

    def login(self, phone, password):
        path = "/api/user/login"
        param = self.query_param(path)
        he = get_he(str(param["ts"]))
        param.update({"he": he})
        data = {
            "phone": phone,
            "password": hashlib.sha1(password.encode()).hexdigest()
        }
        return self.request("POST", path, param, json.dumps(data))

    def request(self, method, path, param, data):
        endpoint = BASE_URL + path
        resp = None
        result = {"code": -1}
        try:
            resp = self._raw_request(method, endpoint, param, data)
            result = resp.json()
        except Exception as e:
            log.error(e)
        except ValueError:
            log.error("Path: {}, response: {}".format(path, resp.text[:200]))
        finally:
            return result

    def _raw_request(self, method, endpoint, params=None, data=None):
        self.header.update({"d-t": str(params["ts"])})

        resp = None
        if method == "GET":
            resp = self.session.get(
                endpoint, params=data, headers=self.header, timeout=DEFAULT_TIMEOUT
            )
        elif method == "POST":
            resp = self.session.post(
                endpoint, params=params, data=data, headers=self.header, timeout=DEFAULT_TIMEOUT
            )
        return resp