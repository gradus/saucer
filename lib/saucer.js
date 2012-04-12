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
var cc, codename, fs, path, saucer;

require('pkginfo')(module, 'version');

codename = 'isolated incident';

fs = require('fs');

path = require('path');

cc = require('coffeecup');

saucer = exports;

saucer.App = require('./saucer/app').App;

saucer.log = require('./saucer/log');

saucer.log.info('Hello Earth');
