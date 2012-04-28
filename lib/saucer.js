/*   ___    __     __  __  ___  ____  ____
*/
/*  / __)  /__\   (  )(  )/ __)( ___)(  _ \
*/
/*  \__ \ /(__)\  )(__) (( (__  )__)( )  /
*/
/*  (___/(__)(__)(______)\___)(____)(_)\_)
*/
/*
*/
/*
*/
/* Minimalist NodeJS Framework in CoffeeScript
*/
/* Copyright(c) 2012 Kris Windham
*/
/* <kriswindham@gmail.com>
*/
/*
*/
/* MIT LICENCE
*/
/*
*/
var cc, codename, fs, http, path, saucer, server;

require('pkginfo')(module, 'version');

codename = 'isolated incident';

fs = require('fs');

path = require('path');

http = require('http');

cc = require('coffeecup');

saucer = exports;

server = http.createServer();

saucer.App = require('./saucer/app').App;

saucer.log = require('./saucer/log');

saucer.server = require('./saucer/server');

saucer.log.info('Hello Earth');

saucer.log.warn('...Warning...');

saucer.log.error('Self destruction is eminent');

saucer.log.info('visit http://localhost:3000');
