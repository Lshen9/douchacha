#!/usr/bin/env python
# coding=utf-8

import js2py


def get_he(he_str: str):
    js = js2py.EvalJs()
    file_path = "./he.js"
    with open(file_path, encoding='UTF-8') as f:
        js_content = f.read()
    js.execute(js_content)
    return js.he(he_str)


def gen_sign(sign_str):
    js = js2py.EvalJs()
    file_path = "./sign.js"
    with open(file_path, encoding='UTF-8') as f:
        js_content = f.read()
    js.execute(js_content)
    return js.get_douchacha_sign(sign_str)
