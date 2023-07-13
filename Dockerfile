FROM ubuntu:latest

RUN /bin/bash -c 'echo This is testing for Jenkins'
ENV myCustomVal="This is sample value" \
    otherEnvVal="This is also a sample"
