#!/usr/bin/env python
# coding=utf-8
import logging

FILE_NAME = "dou_cha_cha.log"


def get_logger(name):
    log = logging.getLogger(name)
    log.setLevel(logging.DEBUG)

    # File output handler
    fh = logging.FileHandler(FILE_NAME)
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(
        logging.Formatter(
            "%(asctime)s - %(levelname)s - %(name)s:%(lineno)s: %(message)s"
        )
    )
    log.addHandler(fh)

    return log
