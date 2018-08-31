/*
 * react-dummy-server 0.1
 * License: MIT.
 * Copyright (C) 2018, KIMSEONHO.
 */

'use strict';

const util = require('util');
const _ = require("lodash");

var Promise = require('bluebird');
var admin = require('firebase-admin');
var jsonfile = require('jsonfile');
var delay = require('delay');

const mkdirp = require("mkdirp");

var envPath;
if (process.env.NODE_ENV === "development") {
	envPath = '.test.env';
	console.log('Development Mode');
} else if (process.env.NODE_ENV === "production") {
	envPath = '.env';
	console.log('Production Mode');
} else {
	throw new Error("no env file found.");
}

require('dotenv').config({path: envPath});

var filename = process.env.DB_FILEPATH || 'dummydata.export.json';
// var port = process.env.FIREBASE_PORT || 3000;

console.log("filename: " + filename);
// console.log("port: " + port);

const common = require('./common');
const objectToArray = common.objectToArray;

var initData = require("./test/data");
mkdirp(process.env.DB_BUILDDIR);
_.forEach(initData, function (value, key) {  // 개별로 찍어보자
	jsonfile.writeFile(process.env.DB_BUILDDIR + "/" + key + ".json", value, {spaces: 2, EOL: '\r\n'}, function (err) {
		if (err) {
			console.error(err);
		}
	});
});

// 전체
jsonfile.writeFile(process.env.DB_BUILDDIR + "/" + filename, initData, {spaces: 2, EOL: '\r\n'}, function (err) {
	if (err) {
		console.error(err);
	}
});

// Customer : A participant named Customer
// Fund : An asset named Fund
// FundContract : An asset named FundContract
// FundLogs : An asset named FundLogs
// Fundmanager : A participant named Fundmanager
// InheritContract : An asset named InheritContract
// PostOffice : A participant named PostOffice
// StockCompany : A participant named StockCompany
// Testament : An asset named Testament

// delete all data

// create all data
// Customer
// let createRequest = () => {
// 	return rp({
// 		method: 'POST',
// 		uri: 'http://api.posttestserver.com/post',
// 		body: initData.Customer,
// 		json: true // Automatically stringifies the body to JSON
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create Customer");
// 		console.log(parsedBody);
//
// 		// Fund
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.Fund,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create Fund");
// 		console.log(parsedBody);
//
// 		// FundManager
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.FundManager,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create FundManager");
// 		console.log(parsedBody);
//
// 		// PostOffice
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.PostOffice,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create PostOffice");
// 		console.log(parsedBody);
//
// 		// StockCompany
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.StockCompany,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create StockCompany");
// 		console.log(parsedBody);
//
// 		// Testament
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.Testament,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create Testament");
// 		console.log(parsedBody);
//
// 		// FundContract
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.FundContract,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create FundContract");
// 		console.log(parsedBody);
//
// 		// FundContract
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.InheritContract,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(function (parsedBody) {
// 		// POST succeeded...
// 		console.log("Complete to Create InheritContract");
// 		console.log(parsedBody);
//
// 		// FundLogs
// 		return rp({
// 			method: 'POST',
// 			uri: 'http://api.posttestserver.com/post',
// 			body: initData.PostOffice,
// 			json: true // Automatically stringifies the body to JSON
// 		});
// 	}).then(() => console.log("test data dump finish"))
// 		.catch((err) => {
// 			// POST failed...
// 			console.error("test data dump Error", err);
// 		});
// };
//
// // create frequent data
// // 계약된 fund의 log를 지속적으로 생성함
// let i = 0;
// let makeFrequentDataRequest = Promise.method((iteration) => {
// 	let result;
//
// 	// FundContract와 InheritContract에 해당하는 계약건의 FundLog를 임의 생성
// 	// test/data/FundLogs.js를 참고함
// 	_.random(0, 1000);
//
// 	_.forEach(initData.FundContract, function(userValue, userKey) {
//
// 	});
//
// 	_.forEach(initData.InheritContract, function(userValue, userKey) {
//
// 	});
//
// 	// 임의 생성된 데이터를 blockchain 서버의 FundLogs에 입력함
// 	return rp({
// 		method: 'POST',
// 		uri: 'http://api.posttestserver.com/post',
// 		body: initData.Customer,
// 		json: true // Automatically stringifies the body to JSON
// 	}).then(() => {
// 		++i;
// 		console.log(`finish makeFrequentDataRequest ${i}`);
// 		return makeFrequentDataRequest(i);
// 	}).catch((err) => {
// 		console.log(`error occured when makeFrequentDataRequest ${i}`);
// 		console.log(err);
// 	});
// });
//
// createRequest().then(() => {
// 	return makeFrequentDataRequest();
// });
