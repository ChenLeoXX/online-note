/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(requestTimeout) { // eslint-disable-line no-unused-vars
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "fee2e165531e6a1e2b48"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/js/app/index.js")(__webpack_require__.s = "./src/js/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/js/app/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__("./src/less/index.less");
var waterFall = __webpack_require__("./src/js/component/waterfall.js");
var NoteControl = __webpack_require__("./src/js/component/note-control.js").noteControl;
var event = __webpack_require__("./src/js/component/event.js");
NoteControl.load();
$('.new-note').on('click', function () {
  NoteControl.add();
});
event.on('waterfall', function () {
  waterFall.init($('#content'));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./src/js/lib/jquery-3.2.1.min.js")))

/***/ }),

/***/ "./src/js/component/event.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var event = function () {
  var eventPool = {};
  function on(topic, handler) {
    eventPool[topic] = eventPool[topic] || [];
    eventPool[topic].push({
      handler: handler
    });
  }
  function trigger(topic, args) {
    if (!eventPool[topic]) {
      return;
    }
    for (var i = 0; i < eventPool[topic].length; i++) {
      eventPool[topic][i].handler(args);
    }
  }
  function off(topic, handler) {
    eventPool[topic].forEach(function (it, inx) {
      if (it.handler === handler) {
        eventPool[topic].splice(inx, 1);
      }
    });
  }
  return {
    on: on,
    off: off,
    trigger: trigger
  };
}();
module.exports = event;

/***/ }),

/***/ "./src/js/component/note-control.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Note = __webpack_require__("./src/js/component/note.js").note;
var Totas = __webpack_require__("./src/js/component/totas.js").totas;
var event = __webpack_require__("./src/js/component/event.js");

var noteControl = function () {
    function load() {
        $.get('/api/notes').done(function (ret) {
            if (ret.status == 0) {
                $.each(ret.data, function (idx, artical) {
                    new Note({
                        id: artical.id,
                        text: artical.text,
                        createdTime: artical.createdAt
                    });
                });
                event.trigger('waterfall');
            } else {
                Totas(ret.errorMsg);
            }
        }).fail(function () {
            Totas('网络异常');
        });
    }

    function add() {
        new Note();
    }

    return {
        load: load,
        add: add
    };
}();
module.exports.noteControl = noteControl;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./src/js/lib/jquery-3.2.1.min.js")))

/***/ }),

/***/ "./src/js/component/note.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__("./src/less/note.less");
var event = __webpack_require__("./src/js/component/event.js");
var totas = __webpack_require__("./src/js/component/totas.js").totas;

function Note(opts) {
    this.initOpts(opts);
    this.create();
    this.setStyle();
    this.bindEvent();
}
Note.prototype = {
    colorPool: [//随机贴纸16进制颜色
    '#ffaa4f', '#ef69b3', '#9f9be8', '#f7bec9', '#97daae', '#9bd1e0'],
    defaultOpts: {
        id: '',
        $ct: $('#content').length > 0 ? $('#content') : $('body'), // 默认容器
        text: '输入内容...',
        Timestamp: function Timestamp() {
            return new Date().toLocaleDateString().replace(/\//g, '-');
        }
    },
    initOpts: function initOpts(opts) {
        this.opts = $.extend({}, this.defaultOpts, opts || {}); //复制一个选项参数，如果没有opts参数，默认为default
        if (this.opts.id) {
            this.id = this.opts.id;
        }
    },
    create: function create() {
        //字符串模板
        var tpl = '<div class="note"> \n     <div class="time"></div>\n     <div class="tuding" contenteditable=false></div>\n     <div class="close" contenteditable=false>X</div>\n     <div class="content" contenteditable=true></div>\n</div>';
        this.$note = $(tpl);
        this.$ct = this.$note.parent();
        var $noteCt = this.$note.find('.content');
        $noteCt.html(this.opts.text);
        var $createTime = this.$note.find('.time');
        if (!this.opts.createdTime) {
            $createTime.html(this.opts.Timestamp());
        } else {
            $createTime.html(this.opts.createdTime.slice(0, 11));
        }
    },
    setStyle: function setStyle() {
        var color = this.colorPool[Math.floor(Math.random() * 6)];
        this.$note.css('background', color);
        this.opts.$ct.append(this.$note);
        event.trigger('waterfall');
    },
    layout: function layout() {
        var self = this;
        if (self.clk) {
            clearTimeout(self.clk);
        }
        self.clk = setTimeout(function () {
            event.trigger('waterfall');
        }, 100);
    },
    bindEvent: function bindEvent() {
        var self = this,
            $note = this.$note,
            $delete = $note.find('.close'),
            $noteHead = $note.find('.tuding'),
            $noteCt = $note.find('.content');
        $note.on('mouseenter', function () {
            $delete.css({ display: 'inline' });
        }).on('mouseleave', function () {
            $delete.css({ display: 'none' });
        });
        $delete.on('click', function () {
            self.delete();
        });
        $noteCt.on('focus', function () {
            //绑定事件，模拟input的change事件 $.data()方法设置属性，存储 note的文本内容
            if ($noteCt.html() == '输入内容...') {
                $noteCt.html('');
            }
            $noteCt.data('before', $noteCt.html());
            console.log($noteCt.data('before'));
        }).on('blur pasete', function () {
            if ($noteCt.data('before') != $noteCt.html()) {
                $noteCt.data('before', $noteCt.html());
                self.layout();
                if (self.id) {
                    self.edit($noteCt.html());
                } else if (self.id === self.id) {
                    self.add($noteCt.html());
                }
            }
        });
        //贴纸移动
        $noteHead.on('mousedown', function (e) {
            var targetX = e.pageX - $note.offset().left,
                //记录鼠标在元素内点击位置到，body文档最左侧距离
            targetY = e.pageY - $note.offset().top; //记录鼠标在元素内点击位置到，body文档最上侧距离
            $note.addClass('draggable').data('targetPos', {
                x: targetX,
                y: targetY
            });
        }).on('mouseup', function (e) {
            $note.removeClass('draggable').removeData('pos');
        });
        $('body').on('mousemove', function (e) {
            $('.draggable').length && $('.draggable').offset({
                left: e.pageX - $('.draggable').data('targetPos').x, // note X轴偏移位置， 当前鼠标在body内位置 - （图钉触发鼠标点击位置 - note自身到body左侧位置）
                top: e.pageY - $('.draggable').data('targetPos').y
            });
        });
    },
    edit: function edit(msg) {
        var self = this;
        $.post('/api/notes/edit', {
            id: this.id,
            note: msg
        }).done(function (ret) {
            if (ret.status === 0) {
                totas('Update Success');
            } else {
                totas(ret.errorMsg);
            }
        });
    },

    add: function add(msg) {
        console.log('execute...add');
        var self = this;
        $.post('/api/notes/add', { note: msg }).done(function (ret) {
            if (ret.status === 0) {
                self.id = ret.id;
                totas('Add Success');
            } else {
                self.$note.remove();
                event.trigger('waterfall');
                totas(ret.errorMsg);
            }
        });
    },

    delete: function _delete() {
        var self = this;
        $.post('/api/notes/delete', { id: this.id }).done(function (ret) {
            if (ret.status === 0) {
                totas('Delete Success');
                self.$note.remove();
                event.trigger('waterfall');
            } else {
                totas(ret.errorMsg);
            }
        });
    }
};
module.exports.note = Note;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./src/js/lib/jquery-3.2.1.min.js")))

/***/ }),

/***/ "./src/js/component/totas.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__("./src/less/totas.less");
function totas(msg, time) {
  this.msg = msg;
  this.time = time || 1000; //ms
  this.createTotas();
  this.showTotas(); //原型上创建两个方法控制创建，消失功能
}
totas.prototype = {
  createTotas: function createTotas() {
    var tpl = '<div class="totas">' + this.msg + '</div>'; //元素模板
    $('body').append(tpl); //插入元素
  },
  showTotas: function showTotas() {
    var _this = this; //声明外部的this指向， 防止setTimeout内部发生变化
    var $totas = $('.totas');
    $totas.fadeIn(500, function () {
      setTimeout(function () {
        $totas.fadeOut(500, function () {
          $totas.remove();
        });
      }, _this.time);
    });
  }
};
function Totas(msg, time) {
  return new totas(msg, time);
}
module.exports.totas = Totas;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./src/js/lib/jquery-3.2.1.min.js")))

/***/ }),

/***/ "./src/js/component/waterfall.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*
   debug 日记 $noteCt,$ct 目前还有问题12.5                                         

*/
var waterFall = function () {
    var $noteCt;
    var $notes;
    function render(ct) {
        $noteCt = ct;
        $notes = $noteCt.children();
        var $noteWidth = $notes.outerWidth(true),
            colNum = parseInt($(window).width() / $noteWidth),
            colHeight = [];
        for (var i = 0; i < colNum; i++) {
            //初始化列高数组
            colHeight.push(0);
        }
        $notes.each(function () {
            var minHeight = colHeight[0],
                //设置最小，高度，索引
            minIndx = 0,
                $curEl = $(this);
            for (var _i = 0; _i < colNum; _i++) {
                if (colHeight[_i] < minHeight) {
                    minHeight = colHeight[_i];
                    minIndx = _i;
                }
            }
            $curEl.css({
                left: minIndx * $noteWidth,
                top: minHeight
            });
            colHeight[minIndx] += $curEl.outerHeight(true); //修改最小列高
        });
    }
    $(window).on('resize', function () {
        render($noteCt);
    });
    return {
        init: render
    };
}();
module.exports = waterFall;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./src/js/lib/jquery-3.2.1.min.js")))

/***/ }),

/***/ "./src/js/lib/jquery-3.2.1.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == "function" && __webpack_require__("./node_modules/webpack/buildin/amd-options.js") && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return r;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/less/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/less/note.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/less/totas.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmVlMmUxNjU1MzFlNmExZTJiNDgiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvbm90ZS1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3RvdGFzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvd2F0ZXJmYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvanF1ZXJ5LTMuMi4xLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9sZXNzL25vdGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy90b3Rhcy5sZXNzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibCIsImkiLCJyZXF1aXJlIiwid2F0ZXJGYWxsIiwiTm90ZUNvbnRyb2wiLCJub3RlQ29udHJvbCIsImV2ZW50IiwibG9hZCIsIiQiLCJvbiIsImFkZCIsImluaXQiLCJldmVudFBvb2wiLCJ0b3BpYyIsImhhbmRsZXIiLCJwdXNoIiwidHJpZ2dlciIsImFyZ3MiLCJsZW5ndGgiLCJvZmYiLCJmb3JFYWNoIiwiaXQiLCJpbngiLCJzcGxpY2UiLCJOb3RlIiwibm90ZSIsIlRvdGFzIiwidG90YXMiLCJkb25lIiwicmV0Iiwic3RhdHVzIiwiZWFjaCIsImRhdGEiLCJpZHgiLCJhcnRpY2FsIiwiaWQiLCJ0ZXh0IiwiY3JlYXRlZFRpbWUiLCJjcmVhdGVkQXQiLCJlcnJvck1zZyIsImZhaWwiLCJvcHRzIiwiaW5pdE9wdHMiLCJjcmVhdGUiLCJzZXRTdHlsZSIsImJpbmRFdmVudCIsInByb3RvdHlwZSIsImNvbG9yUG9vbCIsImRlZmF1bHRPcHRzIiwiJGN0IiwiVGltZXN0YW1wIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInJlcGxhY2UiLCJleHRlbmQiLCJ0cGwiLCIkbm90ZSIsInBhcmVudCIsIiRub3RlQ3QiLCJmaW5kIiwiaHRtbCIsIiRjcmVhdGVUaW1lIiwic2xpY2UiLCJjb2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNzcyIsImFwcGVuZCIsImxheW91dCIsInNlbGYiLCJjbGsiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiJGRlbGV0ZSIsIiRub3RlSGVhZCIsImRpc3BsYXkiLCJkZWxldGUiLCJjb25zb2xlIiwibG9nIiwiZWRpdCIsImUiLCJ0YXJnZXRYIiwicGFnZVgiLCJvZmZzZXQiLCJsZWZ0IiwidGFyZ2V0WSIsInBhZ2VZIiwidG9wIiwiYWRkQ2xhc3MiLCJ4IiwieSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlRGF0YSIsIm1zZyIsInBvc3QiLCJyZW1vdmUiLCJ0aW1lIiwiY3JlYXRlVG90YXMiLCJzaG93VG90YXMiLCJfdGhpcyIsIiR0b3RhcyIsImZhZGVJbiIsImZhZGVPdXQiLCIkbm90ZXMiLCJyZW5kZXIiLCJjdCIsIiRub3RlV2lkdGgiLCJvdXRlcldpZHRoIiwiY29sTnVtIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJ3aWR0aCIsImNvbEhlaWdodCIsIm1pbkhlaWdodCIsIm1pbkluZHgiLCIkY3VyRWwiLCJvdXRlckhlaWdodCIsImEiLCJiIiwiZG9jdW1lbnQiLCJFcnJvciIsImMiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJmIiwiZyIsImNvbmNhdCIsImgiLCJpbmRleE9mIiwiaiIsImsiLCJ0b1N0cmluZyIsImhhc093blByb3BlcnR5IiwibSIsIm4iLCJjYWxsIiwibyIsInAiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicSIsInIiLCJmbiIsInMiLCJ0IiwidSIsInYiLCJ0b1VwcGVyQ2FzZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsIm1hcCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJlbmQiLCJzb3J0IiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiaXNSZWFkeSIsImVycm9yIiwibm9vcCIsInR5cGUiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiY2FtZWxDYXNlIiwidyIsInRyaW0iLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3JlcCIsImd1aWQiLCJwcm94eSIsIm5vdyIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJoYSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiRSIsInBvcCIsIkYiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJNIiwiTiIsIk8iLCJSZWdFeHAiLCJQIiwiUSIsIlIiLCJTIiwiVCIsIlUiLCJWIiwiSUQiLCJDTEFTUyIsIlRBRyIsIkFUVFIiLCJQU0VVRE8iLCJDSElMRCIsImJvb2wiLCJuZWVkc0NvbnRleHQiLCJXIiwiWCIsIlkiLCJaIiwiXyIsImFhIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmEiLCJjYSIsImNoYXJDb2RlQXQiLCJkYSIsImVhIiwidGEiLCJkaXNhYmxlZCIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwibm9kZVR5cGUiLCJmYSIsImdhIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJub2RlTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNhIiwiam9pbiIsInFhIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJpYSIsImphIiwia2EiLCJhdHRySGFuZGxlIiwibGEiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwibWEiLCJuYSIsIm9hIiwiaXNEaXNhYmxlZCIsInBhIiwiaXNYTUwiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaWx0ZXIiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJpbm5lclRleHQiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwiZXZlbiIsIm9kZCIsImx0IiwiZ3QiLCJudGgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsInJhIiwiZmlsdGVycyIsInRva2VuaXplIiwidWEiLCJ2YSIsIndhIiwieGEiLCJ5YSIsInphIiwiY29tcGlsZSIsInNlbGVjdG9yIiwic2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZXhwciIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJpcyIsInBhcnNlSFRNTCIsInJlYWR5IiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJDYWxsYmFja3MiLCJvbmNlIiwic3RvcE9uRmFsc2UiLCJtZW1vcnkiLCJkaXNhYmxlIiwibG9jayIsImxvY2tlZCIsImZpcmVXaXRoIiwiZmlyZSIsImZpcmVkIiwicHJvbWlzZSIsInRoZW4iLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwicGlwZSIsInByb2dyZXNzIiwibm90aWZ5IiwicmVzb2x2ZSIsInJlamVjdCIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsImV4Y2VwdGlvbkhvb2siLCJzdGFja1RyYWNlIiwicmVqZWN0V2l0aCIsImdldFN0YWNrSG9vayIsIndoZW4iLCJ3YXJuIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlXYWl0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsInVpZCIsImNhY2hlIiwiY29uZmlndXJhYmxlIiwic2V0IiwiYWNjZXNzIiwiaGFzRGF0YSIsIkpTT04iLCJwYXJzZSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJxdWV1ZSIsImRlcXVldWUiLCJfcXVldWVIb29rcyIsInN0b3AiLCJjbGVhclF1ZXVlIiwic291cmNlIiwic3R5bGUiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJvcHRpb24iLCJ0aGVhZCIsImNvbCIsInRyIiwidGQiLCJfZGVmYXVsdCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsImNoZWNrQ2xvbmUiLCJjbG9uZU5vZGUiLCJub0Nsb25lQ2hlY2tlZCIsImdsb2JhbCIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJkZWxlZ2F0ZUNvdW50Iiwic2V0dXAiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwiZml4IiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImhhbmRsZXJzIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwicm5hbWVzcGFjZSIsImhhbmRsZU9iaiIsInJlc3VsdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsIkV2ZW50Iiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibm9CdWJibGUiLCJibHVyIiwiY2xpY2siLCJiZWZvcmV1bmxvYWQiLCJyZXR1cm5WYWx1ZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJyZWxhdGVkVGFyZ2V0IiwidGltZVN0YW1wIiwiaXNTaW11bGF0ZWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhbHRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNoYW5nZWRUb3VjaGVzIiwiY3RybEtleSIsImRldGFpbCIsImV2ZW50UGhhc2UiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJ2aWV3IiwiY2hhckNvZGUiLCJrZXkiLCJrZXlDb2RlIiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwidGFyZ2V0VG91Y2hlcyIsInRvRWxlbWVudCIsInRvdWNoZXMiLCJ3aGljaCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib25lIiwiQWEiLCJCYSIsIkNhIiwiRGEiLCJFYSIsIkZhIiwiR2EiLCJIYSIsIklhIiwiSmEiLCJjbG9uZSIsInNyYyIsIl9ldmFsVXJsIiwiS2EiLCJjbGVhbkRhdGEiLCJkZXRhY2giLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiTGEiLCJNYSIsIk5hIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNzc1RleHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsInBpeGVsUG9zaXRpb24iLCJib3hTaXppbmdSZWxpYWJsZSIsInBpeGVsTWFyZ2luUmlnaHQiLCJyZWxpYWJsZU1hcmdpbkxlZnQiLCJPYSIsImdldFByb3BlcnR5VmFsdWUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiUGEiLCJRYSIsIlJhIiwiU2EiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJUYSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwiVWEiLCJWYSIsIldhIiwiWGEiLCJjc3NQcm9wcyIsIllhIiwibWF4IiwiWmEiLCIkYSIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldENsaWVudFJlY3RzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImV4cGFuZCIsIl9hIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJhYiIsImJiIiwiY2IiLCJkYiIsImViIiwiaGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW50ZXJ2YWwiLCJ0aWNrIiwiZmIiLCJnYiIsImhlaWdodCIsImhiIiwia2IiLCJ0d2VlbmVycyIsImliIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImpiIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImNyZWF0ZVR3ZWVuIiwiY29tcGxldGUiLCJ0aW1lciIsImFuaW0iLCJBbmltYXRpb24iLCJ0d2VlbmVyIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZVRvZ2dsZSIsInNsb3ciLCJmYXN0IiwiZGVsYXkiLCJjaGVja09uIiwib3B0U2VsZWN0ZWQiLCJyYWRpb1ZhbHVlIiwibGIiLCJtYiIsInJlbW92ZUF0dHIiLCJhdHRySG9va3MiLCJuYiIsIm9iIiwicmVtb3ZlUHJvcCIsInByb3BGaXgiLCJwYiIsInFiIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsInJiIiwidmFsIiwidmFsSG9va3MiLCJzYiIsImlzVHJpZ2dlciIsInBhcmVudFdpbmRvdyIsInNpbXVsYXRlIiwidHJpZ2dlckhhbmRsZXIiLCJob3ZlciIsImZvY3VzaW4iLCJ0YiIsInViIiwidmIiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIndiIiwieGIiLCJ5YiIsInpiIiwiQWIiLCJwYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwiQmIiLCJDYiIsIkRiIiwiRWIiLCJGYiIsIkdiIiwiSGIiLCJJYiIsIkpiIiwiS2IiLCJMYiIsIk1iIiwiTmIiLCJkYXRhVHlwZXMiLCJPYiIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiUGIiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsIlFiIiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwiZGF0YVR5cGUiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb3RvY29sIiwicHJvY2Vzc0RhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiYWNjZXB0cyIsInhtbCIsImpzb24iLCJjb250ZXh0IiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwiYWJvcnQiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsImhvc3QiLCJ0cmFkaXRpb25hbCIsImhhc0NvbnRlbnQiLCJpZk1vZGlmaWVkIiwiaGVhZGVycyIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIndyYXBBbGwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndyYXBJbm5lciIsIndyYXAiLCJ1bndyYXAiLCJ2aXNpYmxlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIlJiIiwiU2IiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiVGIiLCJVYiIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwiYW5pbWF0ZWQiLCJzZXRPZmZzZXQiLCJ1c2luZyIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsImJpbmQiLCJ1bmJpbmQiLCJkZWxlZ2F0ZSIsInVuZGVsZWdhdGUiLCJob2xkUmVhZHkiLCJwYXJzZUpTT04iLCJWYiIsImpRdWVyeSIsIldiIiwibm9Db25mbGljdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBLFdBQUc7O0FBRUgsb0RBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOzs7O0FBSUE7QUFDQSxzREFBOEM7QUFDOUM7QUFDQTtBQUNBLG9DQUE0QjtBQUM1QixxQ0FBNkI7QUFDN0IseUNBQWlDOztBQUVqQywrQ0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBLDREQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFhLDRCQUE0QjtBQUN6QztBQUNB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QixZQUFVO0FBQUMsV0FBT3JELENBQVA7QUFBUyxHQUF2QztBQUFBLG9HQUF2dEosQ0FBZ3dKLElBQUk2ckIsS0FBR3h0QixFQUFFeXRCLE1BQVQ7QUFBQSxNQUFnQkMsS0FBRzF0QixFQUFFOUcsQ0FBckIsQ0FBdUIsT0FBT3lJLEVBQUVnc0IsVUFBRixHQUFhLFVBQVMxdEIsQ0FBVCxFQUFXO0FBQUMsV0FBT0QsRUFBRTlHLENBQUYsS0FBTXlJLENBQU4sS0FBVTNCLEVBQUU5RyxDQUFGLEdBQUl3MEIsRUFBZCxHQUFrQnp0QixLQUFHRCxFQUFFeXRCLE1BQUYsS0FBVzlyQixDQUFkLEtBQWtCM0IsRUFBRXl0QixNQUFGLEdBQVNELEVBQTNCLENBQWxCLEVBQWlEN3JCLENBQXhEO0FBQTBELEdBQW5GLEVBQW9GMUIsTUFBSUQsRUFBRXl0QixNQUFGLEdBQVN6dEIsRUFBRTlHLENBQUYsR0FBSXlJLENBQWpCLENBQXBGLEVBQXdHQSxDQUEvRztBQUFpSCxDQUY3OHJCLENBQUQsQzs7Ozs7Ozs7QUNEQSx5Qzs7Ozs7OztBQ0FBLHlDOzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB0aGlzW1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gXHJcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHRcdGlmKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdH0gO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XHJcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcclxuIFx0XHQ7XHJcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdGlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XHJcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XHJcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcclxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcclxuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZSkge1xyXG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHRcclxuIFx0XHJcbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcclxuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJmZWUyZTE2NTUzMWU2YTFlMmI0OFwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xyXG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcclxuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdGlmKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XHJcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xyXG4gXHRcdFx0aWYobWUuaG90LmFjdGl2ZSkge1xyXG4gXHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XHJcbiBcdFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpIDwgMClcclxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpIDwgMClcclxuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVxdWVzdCArIFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArIG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xyXG4gXHRcdH07XHJcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9O1xyXG4gXHRcdGZvcih2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcclxuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKVxyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xyXG4gXHRcdFx0XHR0aHJvdyBlcnI7XHJcbiBcdFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XHJcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcclxuIFx0XHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xyXG4gXHRcdFx0XHRcdGlmKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH07XHJcbiBcdFx0cmV0dXJuIGZuO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBob3QgPSB7XHJcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXHJcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXHJcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcclxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxyXG4gXHRcclxuIFx0XHRcdC8vIE1vZHVsZSBBUElcclxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcclxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXHJcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXHJcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXHJcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aWYoIWwpIHJldHVybiBob3RTdGF0dXM7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXHJcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cclxuIFx0XHR9O1xyXG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcclxuIFx0XHRyZXR1cm4gaG90O1xyXG4gXHR9XHJcbiBcdFxyXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcclxuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcclxuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xyXG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90RGVmZXJyZWQ7XHJcbiBcdFxyXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cclxuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcclxuIFx0XHR2YXIgaXNOdW1iZXIgPSAoK2lkKSArIFwiXCIgPT09IGlkO1xyXG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xyXG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcclxuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcclxuIFx0XHRcdGlmKCF1cGRhdGUpIHtcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xyXG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xyXG4gXHRcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcclxuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxyXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xyXG4gXHRcdFx0dmFyIGNodW5rSWQgPSAwO1xyXG4gXHRcdFx0eyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmUtYmxvY2tzXHJcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXHJcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXHJcbiBcdFx0XHRyZXR1cm47XHJcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRpZigtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XHJcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcclxuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xyXG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xyXG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcclxuIFx0XHRpZighZGVmZXJyZWQpIHJldHVybjtcclxuIFx0XHRpZihob3RBcHBseU9uVXBkYXRlKSB7XHJcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xyXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXHJcbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XHJcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XHJcbiBcdFx0XHR9KS50aGVuKFxyXG4gXHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwicmVhZHlcIikgdGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xyXG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgY2I7XHJcbiBcdFx0dmFyIGk7XHJcbiBcdFx0dmFyIGo7XHJcbiBcdFx0dmFyIG1vZHVsZTtcclxuIFx0XHR2YXIgbW9kdWxlSWQ7XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFxyXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XHJcbiBcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXHJcbiBcdFx0XHRcdFx0aWQ6IGlkXHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XHJcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX21haW4pIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRpZighcGFyZW50KSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcclxuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxyXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcclxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xyXG4gXHRcdFx0XHRpZihhLmluZGV4T2YoaXRlbSkgPCAwKVxyXG4gXHRcdFx0XHRcdGEucHVzaChpdGVtKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXHJcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxyXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xyXG4gXHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiKTtcclxuIFx0XHR9O1xyXG4gXHRcclxuIFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XHJcbiBcdFx0XHRcdHZhciByZXN1bHQ7XHJcbiBcdFx0XHRcdGlmKGhvdFVwZGF0ZVtpZF0pIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XHJcbiBcdFx0XHRcdGlmKHJlc3VsdC5jaGFpbikge1xyXG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRzd2l0Y2gocmVzdWx0LnR5cGUpIHtcclxuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIiBpbiBcIiArIHJlc3VsdC5wYXJlbnRJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vblVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25BY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRpc3Bvc2VkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRkZWZhdWx0OlxyXG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihhYm9ydEVycm9yKSB7XHJcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvQXBwbHkpIHtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHRcdFx0XHRmb3IobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcclxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLCByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9EaXNwb3NlKSB7XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cclxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XHJcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXHJcbiBcdFx0XHRcdH0pO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcclxuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcclxuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH0pO1xyXG4gXHRcclxuIFx0XHR2YXIgaWR4O1xyXG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdGlmKCFtb2R1bGUpIGNvbnRpbnVlO1xyXG4gXHRcclxuIFx0XHRcdHZhciBkYXRhID0ge307XHJcbiBcdFxyXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXHJcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xyXG4gXHRcdFx0XHRjYihkYXRhKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcclxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXHJcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcclxuIFx0XHRcdFx0aWYoIWNoaWxkKSBjb250aW51ZTtcclxuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIHtcclxuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxyXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xyXG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xyXG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XHJcbiBcdFx0XHRcdFx0XHRpZihpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xyXG4gXHRcclxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xyXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XHJcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xyXG4gXHRcdFx0XHRcdFx0aWYoY2IpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoY2FsbGJhY2tzLmluZGV4T2YoY2IpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XHJcbiBcdFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XHJcbiBcdFx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xyXG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZXJyMikge1xyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yZ2luYWxFcnJvcjogZXJyLCAvLyBUT0RPIHJlbW92ZSBpbiB3ZWJwYWNrIDRcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjI7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXHJcbiBcdFx0aWYoZXJyb3IpIHtcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XHJcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2pzL2FwcC9pbmRleC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC9pbmRleC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZWUyZTE2NTUzMWU2YTFlMmI0OCIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwicmVxdWlyZSgnbGVzcy9pbmRleC5sZXNzJylcbmNvbnN0IHdhdGVyRmFsbCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC93YXRlcmZhbGwuanMnKVxudmFyIE5vdGVDb250cm9sID0gcmVxdWlyZSgnLi4vY29tcG9uZW50L25vdGUtY29udHJvbC5qcycpLm5vdGVDb250cm9sXG52YXIgZXZlbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnQvZXZlbnQuanMnKVxuTm90ZUNvbnRyb2wubG9hZCgpXG4kKCcubmV3LW5vdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgTm90ZUNvbnRyb2wuYWRkKClcbn0pXG5ldmVudC5vbignd2F0ZXJmYWxsJywgZnVuY3Rpb24oKXtcbiAgd2F0ZXJGYWxsLmluaXQoJCgnI2NvbnRlbnQnKSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwL2luZGV4LmpzIiwidmFyIGV2ZW50ID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGV2ZW50UG9vbCA9IHt9XG4gICAgZnVuY3Rpb24gb24odG9waWMsaGFuZGxlcil7XG4gICAgICBldmVudFBvb2xbdG9waWNdID0gZXZlbnRQb29sW3RvcGljXSB8fCBbXVxuICAgICAgZXZlbnRQb29sW3RvcGljXS5wdXNoKHtcbiAgICAgICAgaGFuZGxlcjpoYW5kbGVyXG4gICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKHRvcGljLGFyZ3Mpe1xuICAgICAgaWYoIWV2ZW50UG9vbFt0b3BpY10pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmb3IobGV0IGk9MDtpPGV2ZW50UG9vbFt0b3BpY10ubGVuZ3RoO2krKyl7XG4gICAgICAgIGV2ZW50UG9vbFt0b3BpY11baV0uaGFuZGxlcihhcmdzKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvZmYodG9waWMsaGFuZGxlcil7XG4gICAgICBldmVudFBvb2xbdG9waWNdLmZvckVhY2goKGl0LGlueCk9PntcbiAgICAgICBpZihpdC5oYW5kbGVyID09PSBoYW5kbGVyKXtcbiAgICAgICAgZXZlbnRQb29sW3RvcGljXS5zcGxpY2UoaW54LDEpXG4gICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uOm9uLFxuICAgICAgb2ZmOm9mZixcbiAgICAgIHRyaWdnZXI6dHJpZ2dlclxuICAgIH1cbiAgfSkoKVxubW9kdWxlLmV4cG9ydHMgPSBldmVudFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvZXZlbnQuanMiLCJjb25zdCBOb3RlID0gcmVxdWlyZSgnLi9ub3RlLmpzJykubm90ZTtcbmNvbnN0IFRvdGFzID0gcmVxdWlyZSgnLi90b3Rhcy5qcycpLnRvdGFzO1xuY29uc3QgZXZlbnQgPSByZXF1aXJlKCcuL2V2ZW50LmpzJyk7XG5cbnZhciBub3RlQ29udHJvbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgJC5nZXQoJy9hcGkvbm90ZXMnKS5kb25lKGZ1bmN0aW9uIChyZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXQuc3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICAkLmVhY2gocmV0LmRhdGEsIGZ1bmN0aW9uIChpZHgsIGFydGljYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGFydGljYWwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhcnRpY2FsLnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkVGltZSA6YXJ0aWNhbC5jcmVhdGVkQXQgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBldmVudC50cmlnZ2VyKCd3YXRlcmZhbGwnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb3RhcyhyZXQuZXJyb3JNc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgVG90YXMoJ+e9kee7nOW8guW4uCcpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgIG5ldyBOb3RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZDogbG9hZCxcbiAgICAgICAgYWRkOiBhZGRcbiAgICB9XG59KSgpXG5tb2R1bGUuZXhwb3J0cy5ub3RlQ29udHJvbCA9IG5vdGVDb250cm9sXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9ub3RlLWNvbnRyb2wuanMiLCJyZXF1aXJlKCdsZXNzL25vdGUubGVzcycpXG5jb25zdCBldmVudCA9IHJlcXVpcmUoJy4vZXZlbnQuanMnKVxuY29uc3QgdG90YXMgPSByZXF1aXJlKCcuL3RvdGFzLmpzJykudG90YXNcblxuZnVuY3Rpb24gTm90ZShvcHRzKSB7XG4gICAgdGhpcy5pbml0T3B0cyhvcHRzKVxuICAgIHRoaXMuY3JlYXRlKClcbiAgICB0aGlzLnNldFN0eWxlKClcbiAgICB0aGlzLmJpbmRFdmVudCgpXG59XG5Ob3RlLnByb3RvdHlwZSA9IHtcbiAgICBjb2xvclBvb2w6IFsgLy/pmo/mnLrotLTnurgxNui/m+WItuminOiJslxuICAgICAgICAnI2ZmYWE0ZicsICcjZWY2OWIzJyxcbiAgICAgICAgJyM5ZjliZTgnLCAnI2Y3YmVjOScsXG4gICAgICAgICcjOTdkYWFlJywgJyM5YmQxZTAnXG4gICAgXSxcbiAgICBkZWZhdWx0T3B0czoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgICRjdDogJCgnI2NvbnRlbnQnKS5sZW5ndGggPiAwID8gJCgnI2NvbnRlbnQnKSA6ICQoJ2JvZHknKSwgLy8g6buY6K6k5a655ZmoXG4gICAgICAgIHRleHQ6ICfovpPlhaXlhoXlrrkuLi4nLFxuICAgICAgICBUaW1lc3RhbXA6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpLnJlcGxhY2UoL1xcLy9nLCctJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5pdE9wdHM6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIHRoaXMub3B0cyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRPcHRzLCBvcHRzIHx8IHt9KSAvL+WkjeWItuS4gOS4qumAiemhueWPguaVsO+8jOWmguaenOayoeaciW9wdHPlj4LmlbDvvIzpu5jorqTkuLpkZWZhdWx0XG4gICAgICAgIGlmICh0aGlzLm9wdHMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLm9wdHMuaWRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8v5a2X56ym5Liy5qih5p2/XG4gICAgICAgIGxldCB0cGwgPSBgPGRpdiBjbGFzcz1cIm5vdGVcIj4gXG4gICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+PC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9XCJ0dWRpbmdcIiBjb250ZW50ZWRpdGFibGU9ZmFsc2U+PC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9XCJjbG9zZVwiIGNvbnRlbnRlZGl0YWJsZT1mYWxzZT5YPC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgY29udGVudGVkaXRhYmxlPXRydWU+PC9kaXY+XG48L2Rpdj5gXG4gICAgICAgIHRoaXMuJG5vdGUgPSAkKHRwbClcbiAgICAgICAgdGhpcy4kY3QgPSB0aGlzLiRub3RlLnBhcmVudCgpXG4gICAgICAgIHZhciAkbm90ZUN0ID0gdGhpcy4kbm90ZS5maW5kKCcuY29udGVudCcpXG4gICAgICAgICAgICAkbm90ZUN0Lmh0bWwodGhpcy5vcHRzLnRleHQpO1xuICAgICAgICB2YXIgJGNyZWF0ZVRpbWUgPSB0aGlzLiRub3RlLmZpbmQoJy50aW1lJykgIFxuICAgICAgICBpZighdGhpcy5vcHRzLmNyZWF0ZWRUaW1lKXtcbiAgICAgICAgICAgICRjcmVhdGVUaW1lLmh0bWwodGhpcy5vcHRzLlRpbWVzdGFtcCgpKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICRjcmVhdGVUaW1lLmh0bWwodGhpcy5vcHRzLmNyZWF0ZWRUaW1lLnNsaWNlKDAsMTEpKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmNvbG9yUG9vbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KV1cbiAgICAgICAgdGhpcy4kbm90ZS5jc3MoJ2JhY2tncm91bmQnLGNvbG9yKVxuICAgICAgICB0aGlzLm9wdHMuJGN0LmFwcGVuZCh0aGlzLiRub3RlKVxuICAgICAgICBldmVudC50cmlnZ2VyKCd3YXRlcmZhbGwnKVxuICAgIH0sXG4gICAgbGF5b3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoc2VsZi5jbGspIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmNsaylcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmNsayA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoJ3dhdGVyZmFsbCcpXG4gICAgICAgIH0sMTAwKTtcbiAgICB9LFxuICAgIGJpbmRFdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAkbm90ZSA9IHRoaXMuJG5vdGUsXG4gICAgICAgICAgICAkZGVsZXRlID0gJG5vdGUuZmluZCgnLmNsb3NlJyksXG4gICAgICAgICAgICAkbm90ZUhlYWQgPSAkbm90ZS5maW5kKCcudHVkaW5nJyksXG4gICAgICAgICAgICAkbm90ZUN0ID0gJG5vdGUuZmluZCgnLmNvbnRlbnQnKVxuICAgICAgICAgICAgJG5vdGUub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJGRlbGV0ZS5jc3Moe2Rpc3BsYXk6J2lubGluZSd9KVxuICAgICAgICAgICAgfSkub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJGRlbGV0ZS5jc3Moe2Rpc3BsYXk6J25vbmUnfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICRkZWxldGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5kZWxldGUoKVxuICAgICAgICB9KVxuICAgICAgICAkbm90ZUN0Lm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHsgLy/nu5Hlrprkuovku7bvvIzmqKHmi59pbnB1dOeahGNoYW5nZeS6i+S7tiAkLmRhdGEoKeaWueazleiuvue9ruWxnuaAp++8jOWtmOWCqCBub3Rl55qE5paH5pys5YaF5a65XG4gICAgICAgICAgICBpZiAoJG5vdGVDdC5odG1sKCkgPT0gJ+i+k+WFpeWGheWuuS4uLicpIHtcbiAgICAgICAgICAgICAgICAkbm90ZUN0Lmh0bWwoJycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbm90ZUN0LmRhdGEoJ2JlZm9yZScsJG5vdGVDdC5odG1sKCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkbm90ZUN0LmRhdGEoJ2JlZm9yZScpKVxuICAgICAgICB9KS5vbignYmx1ciBwYXNldGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJG5vdGVDdC5kYXRhKCdiZWZvcmUnKSAhPSAkbm90ZUN0Lmh0bWwoKSkge1xuICAgICAgICAgICAgICAgICRub3RlQ3QuZGF0YSgnYmVmb3JlJywgJG5vdGVDdC5odG1sKCkpXG4gICAgICAgICAgICAgICAgc2VsZi5sYXlvdXQoKVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZWRpdCgkbm90ZUN0Lmh0bWwoKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoc2VsZi5pZCA9PT1zZWxmLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGQoJG5vdGVDdC5odG1sKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL+i0tOe6uOenu+WKqFxuICAgICAgICAkbm90ZUhlYWQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0WCA9IGUucGFnZVggLSAkbm90ZS5vZmZzZXQoKS5sZWZ0LCAvL+iusOW9lem8oOagh+WcqOWFg+e0oOWGheeCueWHu+S9jee9ruWIsO+8jGJvZHnmlofmoaPmnIDlt6bkvqfot53nprtcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gZS5wYWdlWSAtICRub3RlLm9mZnNldCgpLnRvcCAgICAgICAvL+iusOW9lem8oOagh+WcqOWFg+e0oOWGheeCueWHu+S9jee9ruWIsO+8jGJvZHnmlofmoaPmnIDkuIrkvqfot53nprtcbiAgICAgICAgICAgICRub3RlLmFkZENsYXNzKCdkcmFnZ2FibGUnKS5kYXRhKCd0YXJnZXRQb3MnLCB7XG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0WCxcbiAgICAgICAgICAgICAgICB5OiB0YXJnZXRZXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkbm90ZS5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJykucmVtb3ZlRGF0YSgncG9zJylcbiAgICAgICAgfSlcbiAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZW1vdmUnLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgJCgnLmRyYWdnYWJsZScpLmxlbmd0aCAmJiAkKCcuZHJhZ2dhYmxlJykub2Zmc2V0KHtcbiAgICAgICAgICAgICAgICBsZWZ0OmUucGFnZVggLSAkKCcuZHJhZ2dhYmxlJykuZGF0YSgndGFyZ2V0UG9zJykueCwgLy8gbm90ZSBY6L205YGP56e75L2N572u77yMIOW9k+WJjem8oOagh+WcqGJvZHnlhoXkvY3nva4gLSDvvIjlm77pkonop6blj5HpvKDmoIfngrnlh7vkvY3nva4gLSBub3Rl6Ieq6Lqr5YiwYm9keeW3puS+p+S9jee9ru+8iVxuICAgICAgICAgICAgICAgIHRvcDogZS5wYWdlWSAtICQoJy5kcmFnZ2FibGUnKS5kYXRhKCd0YXJnZXRQb3MnKS55XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZWRpdDogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICQucG9zdCgnL2FwaS9ub3Rlcy9lZGl0Jyx7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIG5vdGU6IG1zZ1xuICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmV0KXtcbiAgICAgICAgICBpZihyZXQuc3RhdHVzID09PSAwKXtcbiAgICAgICAgICAgIHRvdGFzKCdVcGRhdGUgU3VjY2VzcycpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdG90YXMocmV0LmVycm9yTXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIFxuICAgICAgYWRkOiBmdW5jdGlvbiAobXNnKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXhlY3V0ZS4uLmFkZCcpXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgJC5wb3N0KCcvYXBpL25vdGVzL2FkZCcsIHtub3RlOiBtc2d9KVxuICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKHJldCl7XG4gICAgICAgICAgICBpZihyZXQuc3RhdHVzID09PSAwKXtcbiAgICAgICAgICAgICAgc2VsZi5pZCA9cmV0LmlkXG4gICAgICAgICAgICAgIHRvdGFzKCdBZGQgU3VjY2VzcycpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHNlbGYuJG5vdGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoJ3dhdGVyZmFsbCcpXG4gICAgICAgICAgICAgIHRvdGFzKHJldC5lcnJvck1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIFxuICAgICAgZGVsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICQucG9zdCgnL2FwaS9ub3Rlcy9kZWxldGUnLCB7aWQ6IHRoaXMuaWR9KVxuICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKHJldCl7XG4gICAgICAgICAgICBpZihyZXQuc3RhdHVzID09PSAwKXtcbiAgICAgICAgICAgICAgdG90YXMoJ0RlbGV0ZSBTdWNjZXNzJyk7XG4gICAgICAgICAgICAgIHNlbGYuJG5vdGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgZXZlbnQudHJpZ2dlcignd2F0ZXJmYWxsJylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0b3RhcyhyZXQuZXJyb3JNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzLm5vdGUgPSBOb3RlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9ub3RlLmpzIiwicmVxdWlyZSgnbGVzcy90b3Rhcy5sZXNzJylcbmZ1bmN0aW9uIHRvdGFzKG1zZyx0aW1lKXtcbiAgdGhpcy5tc2c9bXNnXG4gIHRoaXMudGltZSA9IHRpbWUgfHwgMTAwMCAvL21zXG4gIHRoaXMuY3JlYXRlVG90YXMoKVxuICB0aGlzLnNob3dUb3RhcygpIC8v5Y6f5Z6L5LiK5Yib5bu65Lik5Liq5pa55rOV5o6n5Yi25Yib5bu677yM5raI5aSx5Yqf6IO9XG59XG50b3Rhcy5wcm90b3R5cGUgPSB7XG4gIGNyZWF0ZVRvdGFzOmZ1bmN0aW9uKCl7XG4gICAgbGV0IHRwbD0gJzxkaXYgY2xhc3M9XCJ0b3Rhc1wiPicrIHRoaXMubXNnKyc8L2Rpdj4nIC8v5YWD57Sg5qih5p2/XG4gICAgJCgnYm9keScpLmFwcGVuZCh0cGwpLy/mj5LlhaXlhYPntKBcbiB9LFxuIHNob3dUb3RhczpmdW5jdGlvbigpe1xuICAgdmFyIF90aGlzPSB0aGlzIC8v5aOw5piO5aSW6YOo55qEdGhpc+aMh+WQke+8jCDpmLLmraJzZXRUaW1lb3V05YaF6YOo5Y+R55Sf5Y+Y5YyWXG4gICB2YXIgJHRvdGFzID0gJCgnLnRvdGFzJylcbiAgICR0b3Rhcy5mYWRlSW4oNTAwLGZ1bmN0aW9uKCl7ICBcbiAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICR0b3Rhcy5mYWRlT3V0KDUwMCxmdW5jdGlvbigpe1xuICAgICAgJHRvdGFzLnJlbW92ZSgpICAgICAgXG4gICAgICB9KVxuICAgIH0sX3RoaXMudGltZSlcbiAgfSlcbn1cbn1cbmZ1bmN0aW9uIFRvdGFzKG1zZyx0aW1lKXtcbiByZXR1cm4gbmV3IHRvdGFzKG1zZyx0aW1lKVxufVxubW9kdWxlLmV4cG9ydHMudG90YXM9IFRvdGFzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50L3RvdGFzLmpzIiwiLypcbiAgIGRlYnVnIOaXpeiusCAkbm90ZUN0LCRjdCDnm67liY3ov5jmnInpl67popgxMi41ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuKi8gXG52YXIgd2F0ZXJGYWxsID0gKGZ1bmN0aW9uKCl7XG4gICAgdmFyICRub3RlQ3RcbiAgICB2YXIgJG5vdGVzXG4gIGZ1bmN0aW9uIHJlbmRlcihjdCl7XG4gICAgJG5vdGVDdCA9IGN0XG4gICAgJG5vdGVzID0gJG5vdGVDdC5jaGlsZHJlbigpXG4gICAgdmFyICRub3RlV2lkdGggPSAkbm90ZXMub3V0ZXJXaWR0aCh0cnVlKSxcbiAgICAgICAgY29sTnVtID0gcGFyc2VJbnQoJCh3aW5kb3cpLndpZHRoKCkvICRub3RlV2lkdGgpLFxuICAgICAgICBjb2xIZWlnaHQgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxjb2xOdW07aSsrKXsgLy/liJ3lp4vljJbliJfpq5jmlbDnu4RcbiAgICAgICAgICAgICAgICBjb2xIZWlnaHQucHVzaCgwKVxuICAgICAgICAgICAgfVxuICAgICRub3Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBtaW5IZWlnaHQgPWNvbEhlaWdodFswXSAsIC8v6K6+572u5pyA5bCP77yM6auY5bqm77yM57Si5byVXG4gICAgICAgICAgICBtaW5JbmR4ID0wLFxuICAgICAgICAkY3VyRWwgPSAkKHRoaXMpXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Y29sTnVtO2krKyl7XG4gICAgICAgICAgICBpZihjb2xIZWlnaHRbaV08bWluSGVpZ2h0KXtcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQgPSBjb2xIZWlnaHRbaV1cbiAgICAgICAgICAgICAgICBtaW5JbmR4ID0gaVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRjdXJFbC5jc3Moe1xuICAgICAgICAgICAgbGVmdDptaW5JbmR4KiAkbm90ZVdpZHRoLFxuICAgICAgICAgICAgdG9wOm1pbkhlaWdodFxuICAgICAgICB9KVxuICAgICAgICBjb2xIZWlnaHRbbWluSW5keF0gKz0gJGN1ckVsLm91dGVySGVpZ2h0KHRydWUpLy/kv67mlLnmnIDlsI/liJfpq5hcbiAgICB9KSAgICAgICAgICAgICAgIFxuICB9XG4gICQod2luZG93KS5vbigncmVzaXplJyxmdW5jdGlvbigpe1xuICAgIHJlbmRlcigkbm90ZUN0KVxuICB9KVxuICByZXR1cm4ge1xuICAgIGluaXQ6IHJlbmRlclxuICB9XG59KSgpXG5tb2R1bGUuZXhwb3J0cyA9IHdhdGVyRmFsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvd2F0ZXJmYWxsLmpzIiwiLyohIGpRdWVyeSB2My4yLjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsZj1jLnNsaWNlLGc9Yy5jb25jYXQsaD1jLnB1c2gsaT1jLmluZGV4T2Ysaj17fSxrPWoudG9TdHJpbmcsbD1qLmhhc093blByb3BlcnR5LG09bC50b1N0cmluZyxuPW0uY2FsbChPYmplY3QpLG89e307ZnVuY3Rpb24gcChhLGIpe2I9Ynx8ZDt2YXIgYz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7Yy50ZXh0PWEsYi5oZWFkLmFwcGVuZENoaWxkKGMpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyl9dmFyIHE9XCIzLjIuMVwiLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHIuZm4uaW5pdChhLGIpfSxzPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyx0PS9eLW1zLS8sdT0vLShbYS16XSkvZyx2PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07ci5mbj1yLnByb3RvdHlwZT17anF1ZXJ5OnEsY29uc3RydWN0b3I6cixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGYuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2YuY2FsbCh0aGlzKTphPDA/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9ci5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGJ9LGVhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZWFjaCh0aGlzLGEpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKyhhPDA/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYzxiP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpoLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sci5leHRlbmQ9ci5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxyLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2g8aTtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYoci5pc1BsYWluT2JqZWN0KGQpfHwoZT1BcnJheS5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZBcnJheS5pc0FycmF5KGMpP2M6W10pOmY9YyYmci5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1yLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sci5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisocStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1yLnR5cGUoYSl9LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1yLnR5cGUoYSk7cmV0dXJuKFwibnVtYmVyXCI9PT1ifHxcInN0cmluZ1wiPT09YikmJiFpc05hTihhLXBhcnNlRmxvYXQoYSkpfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM7cmV0dXJuISghYXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PWsuY2FsbChhKSkmJighKGI9ZShhKSl8fChjPWwuY2FsbChiLFwiY29uc3RydWN0b3JcIikmJmIuY29uc3RydWN0b3IsXCJmdW5jdGlvblwiPT10eXBlb2YgYyYmbS5jYWxsKGMpPT09bikpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2pbay5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXtwKGEpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh0LFwibXMtXCIpLnJlcGxhY2UodSx2KX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZih3KGEpKXtmb3IoYz1hLmxlbmd0aDtkPGM7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShzLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHcoT2JqZWN0KGEpKT9yLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmguY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTppLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7ZDxjO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2Y8ZztmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPTAsaD1bXTtpZih3KGEpKWZvcihkPWEubGVuZ3RoO2Y8ZDtmKyspZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZiBpbiBhKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBnLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksci5pc0Z1bmN0aW9uKGEpKXJldHVybiBkPWYuY2FsbChhcmd1bWVudHMsMiksZT1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZi5jYWxsKGFyZ3VtZW50cykpKX0sZS5ndWlkPWEuZ3VpZD1hLmd1aWR8fHIuZ3VpZCsrLGV9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Om99KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihyLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxyLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2pbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHcoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1yLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09YyYmIXIuaXNXaW5kb3coYSkmJihcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpfXZhciB4PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPXt9Lmhhc093blByb3BlcnR5LEQ9W10sRT1ELnBvcCxGPUQucHVzaCxHPUQucHVzaCxIPUQuc2xpY2UsST1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsSz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTD1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsTT1cIlxcXFxbXCIrSytcIiooXCIrTCtcIikoPzpcIitLK1wiKihbKl4kfCF+XT89KVwiK0srXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitMK1wiKSl8KVwiK0srXCIqXFxcXF1cIixOPVwiOihcIitMK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitNK1wiKSopfC4qKVxcXFwpfClcIixPPW5ldyBSZWdFeHAoSytcIitcIixcImdcIiksUD1uZXcgUmVnRXhwKFwiXlwiK0srXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0srXCIrJFwiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrSytcIiosXCIrSytcIipcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0srXCIqKFs+K35dfFwiK0srXCIpXCIrSytcIipcIiksUz1uZXcgUmVnRXhwKFwiPVwiK0srXCIqKFteXFxcXF0nXFxcIl0qPylcIitLK1wiKlxcXFxdXCIsXCJnXCIpLFQ9bmV3IFJlZ0V4cChOKSxVPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0wrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTCtcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0wrXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrSytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0srXCIqKD86KFsrLV18KVwiK0srXCIqKFxcXFxkKyl8KSlcIitLK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0orXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitLK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitLK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitLK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxXPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWD0vXmhcXGQkL2ksWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sJD0vWyt+XS8sXz1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrSytcIj98KFwiK0srXCIpfC4pXCIsXCJpZ1wiKSxhYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6ZDwwP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxiYT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBiP1wiXFwwXCI9PT1hP1wiXFx1ZmZmZFwiOmEuc2xpY2UoMCwtMSkrXCJcXFxcXCIrYS5jaGFyQ29kZUF0KGEubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIithfSxkYT1mdW5jdGlvbigpe20oKX0sZWE9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMCYmKFwiZm9ybVwiaW4gYXx8XCJsYWJlbFwiaW4gYSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0cuYXBwbHkoRD1ILmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLERbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZmEpe0c9e2FwcGx5OkQubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ri5hcHBseShhLEguY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGdhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHM9YiYmYi5vd25lckRvY3VtZW50LHc9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT13JiY5IT09dyYmMTEhPT13KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09dyYmKGw9Wi5leGVjKGEpKSlpZihmPWxbMV0pe2lmKDk9PT13KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYocyYmKGo9cy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYobFsyXSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9bFszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXcpcz1iLHI9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGJhLGNhKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxvPWcoYSksaD1vLmxlbmd0aDt3aGlsZShoLS0pb1toXT1cIiNcIitrK1wiIFwiK3NhKG9baF0pO3I9by5qb2luKFwiLFwiKSxzPSQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8Yn1pZihyKXRyeXtyZXR1cm4gRy5hcHBseShkLHMucXVlcnlTZWxlY3RvckFsbChyKSksZH1jYXRjaCh4KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShQLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGxhKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmYS5zb3VyY2VJbmRleC1iLnNvdXJjZUluZGV4O2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwiZm9ybVwiaW4gYj9iLnBhcmVudE5vZGUmJmIuZGlzYWJsZWQ9PT0hMT9cImxhYmVsXCJpbiBiP1wibGFiZWxcImluIGIucGFyZW50Tm9kZT9iLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1hOmIuZGlzYWJsZWQ9PT1hOmIuaXNEaXNhYmxlZD09PWF8fGIuaXNEaXNhYmxlZCE9PSFhJiZlYShiKT09PWE6Yi5kaXNhYmxlZD09PWE6XCJsYWJlbFwiaW4gYiYmYi5kaXNhYmxlZD09PWF9fWZ1bmN0aW9uIHBhKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISFiJiZcIkhUTUxcIiE9PWIubm9kZU5hbWV9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksdiE9PW4mJihlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1ZLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19KTooZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGMsZCxlLGY9Yi5nZXRFbGVtZW50QnlJZChhKTtpZihmKXtpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXTtlPWIuZ2V0RWxlbWVudHNCeU5hbWUoYSksZD0wO3doaWxlKGY9ZVtkKytdKWlmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdfXJldHVybltdfX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnApcmV0dXJuIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKX0scj1bXSxxPVtdLChjLnFzYT1ZLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrSytcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrSytcIiooPzp2YWx1ZXxcIitKK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe2EuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0srXCIqWypeJHwhfl0/PVwiKSwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLG8uYXBwZW5kQ2hpbGQoYSkuZGlzYWJsZWQ9ITAsMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1ZLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmphKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCIqXCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTil9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1ZLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxZLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SShrLGEpLUkoayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9JKGssYSktSShrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9sYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFMsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBnYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxnYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGdhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZDLmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxnYS5lc2NhcGU9ZnVuY3Rpb24oYSl7cmV0dXJuKGErXCJcIikucmVwbGFjZShiYSxjYSl9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKF8sYWEpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoXyxhYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8Z2EuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZ2EuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZULnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrSytcIilcIithK1wiKFwiK0srXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjohYnx8KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoTyxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09YiYmKGU9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2lhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1JKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmlhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShQLFwiJDFcIikpO3JldHVybiBkW3VdP2lhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBnYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShfLGFhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVS50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6b2EoITEpLGRpc2FibGVkOm9hKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6cGEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnBhKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpwYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuW2M8MD9jK2I6Y119KSxldmVuOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bWEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bmEoYik7ZnVuY3Rpb24gcmEoKXt9cmEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyByYSxnPWdhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVEuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVIuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUCxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9VltnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2dhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gc2EoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7YjxjO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZD1iLmRpcixlPWIubmV4dCxmPWV8fGQsZz1jJiZcInBhcmVudE5vZGVcIj09PWYsaD14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGUpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylyZXR1cm4gYShiLGMsZSk7cmV0dXJuITF9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbT1bdyxoXTtpZihpKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxnKSYmYShiLGMsaSkpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpaWYobD1iW3VdfHwoYlt1XT17fSksaz1sW2IudW5pcXVlSURdfHwobFtiLnVuaXF1ZUlEXT17fSksZSYmZT09PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSliPWJbZF18fGI7ZWxzZXtpZigoaj1rW2ZdKSYmalswXT09PXcmJmpbMV09PT1oKXJldHVybiBtWzJdPWpbMl07aWYoa1tmXT1tLG1bMl09YShiLGMsaSkpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHVhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2Q8ZTtkKyspZ2EoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2g8aTtoKyspKGY9YVtoXSkmJihjJiYhYyhmLGQsZSl8fChnLnB1c2goZiksaiYmYi5wdXNoKGgpKSk7cmV0dXJuIGd9ZnVuY3Rpb24geGEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9eGEoZCkpLGUmJiFlW3VdJiYoZT14YShlLGYpKSxpYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx2YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOndhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj13YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SShmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9d2Eocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkcuYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHlhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz10YShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIEkoYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2k8ZjtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bdGEodWEobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7ZTxmO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHhhKGk+MSYmdWEobSksaT4xJiZzYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFAsXCIkMVwiKSxjLGk8ZSYmeWEoYS5zbGljZShpLGUpKSxlPGYmJnlhKGE9YS5zbGljZShlKSksZTxmJiZzYShhKSl9bS5wdXNoKGMpfXJldHVybiB1YShtKX1mdW5jdGlvbiB6YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109RS5jYWxsKGkpKTt1PXdhKHUpfUcuYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZnYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aWEoZik6Zn1yZXR1cm4gaD1nYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj15YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEsemEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWdhLnNlbGVjdD1mdW5jdGlvbihhLGIsYyxlKXt2YXIgZixpLGosayxsLG09XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxuPSFlJiZnKGE9bS5zZWxlY3Rvcnx8YSk7aWYoYz1jfHxbXSwxPT09bi5sZW5ndGgpe2lmKGk9blswXT1uWzBdLnNsaWNlKDApLGkubGVuZ3RoPjImJlwiSURcIj09PShqPWlbMF0pLnR5cGUmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2lbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSxiKXx8W10pWzBdLCFiKXJldHVybiBjO20mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGkuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWY9Vi5uZWVkc0NvbnRleHQudGVzdChhKT8wOmkubGVuZ3RoO3doaWxlKGYtLSl7aWYoaj1pW2ZdLGQucmVsYXRpdmVbaz1qLnR5cGVdKWJyZWFrO2lmKChsPWQuZmluZFtrXSkmJihlPWwoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksJC50ZXN0KGlbMF0udHlwZSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoaS5zcGxpY2UoZiwxKSxhPWUubGVuZ3RoJiZzYShpKSwhYSlyZXR1cm4gRy5hcHBseShjLGUpLGM7YnJlYWt9fX1yZXR1cm4obXx8aChhLG4pKShlLGIsIXAsYywhYnx8JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxiKSxjfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8a2EoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjKXJldHVybiBhLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxrYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjJiZcImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGEuZGVmYXVsdFZhbHVlfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8a2EoSixmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoIWMpcmV0dXJuIGFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZ2F9KGEpO3IuZmluZD14LHIuZXhwcj14LnNlbGVjdG9ycyxyLmV4cHJbXCI6XCJdPXIuZXhwci5wc2V1ZG9zLHIudW5pcXVlU29ydD1yLnVuaXF1ZT14LnVuaXF1ZVNvcnQsci50ZXh0PXguZ2V0VGV4dCxyLmlzWE1MRG9jPXguaXNYTUwsci5jb250YWlucz14LmNvbnRhaW5zLHIuZXNjYXBlU2VsZWN0b3I9eC5lc2NhcGU7dmFyIHk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJnIoYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx6PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSxBPXIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9dmFyIEM9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2ksRD0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gRShhLGIsYyl7cmV0dXJuIHIuaXNGdW5jdGlvbihiKT9yLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTpiLm5vZGVUeXBlP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTpcInN0cmluZ1wiIT10eXBlb2YgYj9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jfSk6RC50ZXN0KGIpP3IuZmlsdGVyKGIsYSxjKTooYj1yLmZpbHRlcihiLGEpLHIuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWMmJjE9PT1hLm5vZGVUeXBlfSkpfXIuZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9yLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOnIuZmluZC5tYXRjaGVzKGEsci5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxyLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5sZW5ndGgsZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhyKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7YjxkO2IrKylpZihyLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGM9dGhpcy5wdXNoU3RhY2soW10pLGI9MDtiPGQ7YisrKXIuZmluZChhLGVbYl0sYyk7cmV0dXJuIGQ+MT9yLnVuaXF1ZVNvcnQoYyk6Y30sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFKHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFKHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISFFKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJkEudGVzdChhKT9yKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEYsRz0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxIPXIuZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEYsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Ry5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIHI/YlswXTpiLHIubWVyZ2UodGhpcyxyLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSxDLnRlc3QoZVsxXSkmJnIuaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKXIuaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmKHRoaXNbMF09Zix0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpyLmlzRnVuY3Rpb24oYSk/dm9pZCAwIT09Yy5yZWFkeT9jLnJlYWR5KGEpOmEocik6ci5tYWtlQXJyYXkoYSx0aGlzKX07SC5wcm90b3R5cGU9ci5mbixGPXIoZCk7dmFyIEk9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSj17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtyLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPXIoYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YzthKyspaWYoci5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9XCJzdHJpbmdcIiE9dHlwZW9mIGEmJnIoYSk7aWYoIUEudGVzdChhKSlmb3IoO2Q8ZTtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/ci51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9pLmNhbGwocihhKSx0aGlzWzBdKTppLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIudW5pcXVlU29ydChyLm1lcmdlKHRoaXMuZ2V0KCkscihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBLKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1yLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSyhhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB6KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4geihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gQihhLFwiaWZyYW1lXCIpP2EuY29udGVudERvY3VtZW50OihCKGEsXCJ0ZW1wbGF0ZVwiKSYmKGE9YS5jb250ZW50fHxhKSxyLm1lcmdlKFtdLGEuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9ci5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEpbYV18fHIudW5pcXVlU29ydChlKSxJLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgTD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gTShhKXt2YXIgYj17fTtyZXR1cm4gci5lYWNoKGEubWF0Y2goTCl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9ci5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9NKGEpOnIuZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1lfHxhLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe3IuZWFjaChiLGZ1bmN0aW9uKGIsYyl7ci5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ci50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1yLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGM8PWgmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9yLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8Ynx8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfTtmdW5jdGlvbiBOKGEpe3JldHVybiBhfWZ1bmN0aW9uIE8oYSl7dGhyb3cgYX1mdW5jdGlvbiBQKGEsYixjLGQpe3ZhciBlO3RyeXthJiZyLmlzRnVuY3Rpb24oZT1hLnByb21pc2UpP2UuY2FsbChhKS5kb25lKGIpLmZhaWwoYyk6YSYmci5pc0Z1bmN0aW9uKGU9YS50aGVuKT9lLmNhbGwoYSxiLGMpOmIuYXBwbHkodm9pZCAwLFthXS5zbGljZShkKSl9Y2F0Y2goYSl7Yy5hcHBseSh2b2lkIDAsW2FdKX19ci5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGIpe3ZhciBjPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsci5DYWxsYmFja3MoXCJtZW1vcnlcIiksci5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0sZD1cInBlbmRpbmdcIixlPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBkfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZi5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gZS50aGVuKG51bGwsYSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYil7ci5lYWNoKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1yLmlzRnVuY3Rpb24oYVtkWzRdXSkmJmFbZFs0XV07ZltkWzFdXShmdW5jdGlvbigpe3ZhciBhPWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJnIuaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGIubm90aWZ5KS5kb25lKGIucmVzb2x2ZSkuZmFpbChiLnJlamVjdCk6YltkWzBdK1wiV2l0aFwiXSh0aGlzLGU/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbihiLGQsZSl7dmFyIGY9MDtmdW5jdGlvbiBnKGIsYyxkLGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBoPXRoaXMsaT1hcmd1bWVudHMsaj1mdW5jdGlvbigpe3ZhciBhLGo7aWYoIShiPGYpKXtpZihhPWQuYXBwbHkoaCxpKSxhPT09Yy5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtqPWEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkmJmEudGhlbixyLmlzRnVuY3Rpb24oaik/ZT9qLmNhbGwoYSxnKGYsYyxOLGUpLGcoZixjLE8sZSkpOihmKyssai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpLGcoZixjLE4sYy5ub3RpZnlXaXRoKSkpOihkIT09TiYmKGg9dm9pZCAwLGk9W2FdKSwoZXx8Yy5yZXNvbHZlV2l0aCkoaCxpKSl9fSxrPWU/ajpmdW5jdGlvbigpe3RyeXtqKCl9Y2F0Y2goYSl7ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soYSxrLnN0YWNrVHJhY2UpLGIrMT49ZiYmKGQhPT1PJiYoaD12b2lkIDAsaT1bYV0pLGMucmVqZWN0V2l0aChoLGkpKX19O2I/aygpOihyLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKGsuc3RhY2tUcmFjZT1yLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxhLnNldFRpbWVvdXQoaykpfX1yZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihhKXtjWzBdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZSk/ZTpOLGEubm90aWZ5V2l0aCkpLGNbMV1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihiKT9iOk4pKSxjWzJdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZCk/ZDpPKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/ci5leHRlbmQoYSxlKTplfX0sZj17fTtyZXR1cm4gci5lYWNoKGMsZnVuY3Rpb24oYSxiKXt2YXIgZz1iWzJdLGg9Yls1XTtlW2JbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7ZD1ofSxjWzMtYV1bMl0uZGlzYWJsZSxjWzBdWzJdLmxvY2spLGcuYWRkKGJbM10uZmlyZSksZltiWzBdXT1mdW5jdGlvbigpe3JldHVybiBmW2JbMF0rXCJXaXRoXCJdKHRoaXM9PT1mP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZltiWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZS5wcm9taXNlKGYpLGImJmIuY2FsbChmLGYpLGZ9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9YXJndW1lbnRzLmxlbmd0aCxjPWIsZD1BcnJheShjKSxlPWYuY2FsbChhcmd1bWVudHMpLGc9ci5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2RbYV09dGhpcyxlW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9mLmNhbGwoYXJndW1lbnRzKTpjLC0tYnx8Zy5yZXNvbHZlV2l0aChkLGUpfX07aWYoYjw9MSYmKFAoYSxnLmRvbmUoaChjKSkucmVzb2x2ZSxnLnJlamVjdCwhYiksXCJwZW5kaW5nXCI9PT1nLnN0YXRlKCl8fHIuaXNGdW5jdGlvbihlW2NdJiZlW2NdLnRoZW4pKSlyZXR1cm4gZy50aGVuKCk7d2hpbGUoYy0tKVAoZVtjXSxoKGMpLGcucmVqZWN0KTtyZXR1cm4gZy5wcm9taXNlKCl9fSk7dmFyIFE9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGIsYyl7YS5jb25zb2xlJiZhLmNvbnNvbGUud2FybiYmYiYmUS50ZXN0KGIubmFtZSkmJmEuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrYi5tZXNzYWdlLGIuc3RhY2ssYyl9LHIucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oYil7YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYn0pfTt2YXIgUj1yLkRlZmVycmVkKCk7ci5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gUi50aGVuKGEpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oYSl7ci5yZWFkeUV4Y2VwdGlvbihhKX0pLHRoaXN9LHIuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1yLnJlYWR5V2FpdDpyLmlzUmVhZHkpfHwoci5pc1JlYWR5PSEwLGEhPT0hMCYmLS1yLnJlYWR5V2FpdD4wfHxSLnJlc29sdmVXaXRoKGQsW3JdKSl9fSksci5yZWFkeS50aGVuPVIudGhlbjtmdW5jdGlvbiBTKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFMpLFxuYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLFMpLHIucmVhZHkoKX1cImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KHIucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUyksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFMpKTt2YXIgVD1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1yLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylUKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLHIuaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChyKGEpLGMpfSkpLGIpKWZvcig7aDxpO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LFU9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBWKCl7dGhpcy5leHBhbmRvPXIuZXhwYW5kbytWLnVpZCsrfVYudWlkPTEsVi5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sVShhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtyLmNhbWVsQ2FzZShiKV09YztlbHNlIGZvcihkIGluIGIpZVtyLmNhbWVsQ2FzZShkKV09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtyLmNhbWVsQ2FzZShiKV19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jP3RoaXMuZ2V0KGEsYik6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWQpe2lmKHZvaWQgMCE9PWIpe0FycmF5LmlzQXJyYXkoYik/Yj1iLm1hcChyLmNhbWVsQ2FzZSk6KGI9ci5jYW1lbENhc2UoYiksYj1iIGluIGQ/W2JdOmIubWF0Y2goTCl8fFtdKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZFtiW2NdXX0odm9pZCAwPT09Ynx8ci5pc0VtcHR5T2JqZWN0KGQpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhci5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIFc9bmV3IFYsWD1uZXcgVixZPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxaPS9bQS1aXS9nO2Z1bmN0aW9uICQoYSl7cmV0dXJuXCJ0cnVlXCI9PT1hfHxcImZhbHNlXCIhPT1hJiYoXCJudWxsXCI9PT1hP251bGw6YT09PSthK1wiXCI/K2E6WS50ZXN0KGEpP0pTT04ucGFyc2UoYSk6YSl9ZnVuY3Rpb24gXyhhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFosXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz0kKGMpfWNhdGNoKGUpe31YLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31yLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gWC5oYXNEYXRhKGEpfHxXLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBYLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtYLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcuYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtXLnJlbW92ZShhLGIpfX0pLHIuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9WC5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFXLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9ci5jYW1lbENhc2UoZC5zbGljZSg1KSksXyhmLGQsZVtkXSkpKTtXLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe1guc2V0KHRoaXMsYSl9KTpUKHRoaXMsZnVuY3Rpb24oYil7dmFyIGM7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1YLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1fKGYsYSksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe1guc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtYLnJlbW92ZSh0aGlzLGEpfSl9fSksci5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZihhKXJldHVybiBiPShifHxcImZ4XCIpK1wicXVldWVcIixkPVcuZ2V0KGEsYiksYyYmKCFkfHxBcnJheS5pc0FycmF5KGMpP2Q9Vy5hY2Nlc3MoYSxiLHIubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9ci5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1yLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe3IuZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFcuZ2V0KGEsYyl8fFcuYWNjZXNzKGEsYyx7ZW1wdHk6ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtXLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLHIuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/ci5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1yLnF1ZXVlKHRoaXMsYSxiKTtyLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZyLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1yLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1XLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBhYT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsYmE9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrYWErXCIpKFthLXolXSopJFwiLFwiaVwiKSxjYT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sZGE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09YS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09YS5zdHlsZS5kaXNwbGF5JiZyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKSYmXCJub25lXCI9PT1yLmNzcyhhLFwiZGlzcGxheVwiKX0sZWE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9O2Z1bmN0aW9uIGZhKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiByLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KHIuY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShyLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZiYS5leGVjKHIuY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsci5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgZ2E9e307ZnVuY3Rpb24gaGEoYSl7dmFyIGIsYz1hLm93bmVyRG9jdW1lbnQsZD1hLm5vZGVOYW1lLGU9Z2FbZF07cmV0dXJuIGU/ZTooYj1jLmJvZHkuYXBwZW5kQ2hpbGQoYy5jcmVhdGVFbGVtZW50KGQpKSxlPXIuY3NzKGIsXCJkaXNwbGF5XCIpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxcIm5vbmVcIj09PWUmJihlPVwiYmxvY2tcIiksZ2FbZF09ZSxlKX1mdW5jdGlvbiBpYShhLGIpe2Zvcih2YXIgYyxkLGU9W10sZj0wLGc9YS5sZW5ndGg7ZjxnO2YrKylkPWFbZl0sZC5zdHlsZSYmKGM9ZC5zdHlsZS5kaXNwbGF5LGI/KFwibm9uZVwiPT09YyYmKGVbZl09Vy5nZXQoZCxcImRpc3BsYXlcIil8fG51bGwsZVtmXXx8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmZGEoZCkmJihlW2ZdPWhhKGQpKSk6XCJub25lXCIhPT1jJiYoZVtmXT1cIm5vbmVcIixXLnNldChkLFwiZGlzcGxheVwiLGMpKSk7Zm9yKGY9MDtmPGc7ZisrKW51bGwhPWVbZl0mJihhW2ZdLnN0eWxlLmRpc3BsYXk9ZVtmXSk7cmV0dXJuIGF9ci5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gaWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gaWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtkYSh0aGlzKT9yKHRoaXMpLnNob3coKTpyKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBqYT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxrYT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksbGE9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxtYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O21hLm9wdGdyb3VwPW1hLm9wdGlvbixtYS50Ym9keT1tYS50Zm9vdD1tYS5jb2xncm91cD1tYS5jYXB0aW9uPW1hLnRoZWFkLG1hLnRoPW1hLnRkO2Z1bmN0aW9uIG5hKGEsYil7dmFyIGM7cmV0dXJuIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdLHZvaWQgMD09PWJ8fGImJkIoYSxiKT9yLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIG9hKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKVcuc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fFcuZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgcGE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHFhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbj0wLG89YS5sZW5ndGg7bjxvO24rKylpZihmPWFbbl0sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PXIudHlwZShmKSlyLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihwYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShrYS5leGVjKGYpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxpPW1hW2hdfHxtYS5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK3IuaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtyLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG49MDt3aGlsZShmPW1bbisrXSlpZihkJiZyLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPXIuY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9bmEobC5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxqJiZvYShnKSxjKXtrPTA7d2hpbGUoZj1nW2srK10pbGEudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGx9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxvLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsby5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciByYT1kLmRvY3VtZW50RWxlbWVudCxzYT0vXmtleS8sdGE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLHVhPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gdmEoKXtyZXR1cm4hMH1mdW5jdGlvbiB3YSgpe3JldHVybiExfWZ1bmN0aW9uIHhhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiB5YShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpeWEoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT13YTtlbHNlIGlmKCFlKXJldHVybiBhO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiByKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPXIuZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfXIuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5nZXQoYSk7aWYocSl7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihyYSxlKSxjLmd1aWR8fChjLmd1aWQ9ci5ndWlkKyspLChpPXEuZXZlbnRzKXx8KGk9cS5ldmVudHM9e30pLChnPXEuaGFuZGxlKXx8KGc9cS5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHImJnIuZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP3IuZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4mJihsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30saz1yLmV4dGVuZCh7dHlwZTpuLG9yaWdUeXBlOnAsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZyLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOm8uam9pbihcIi5cIil9LGYpLChtPWlbbl0pfHwobT1pW25dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQsbyxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihuLGcpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksci5ldmVudC5nbG9iYWxbbl09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVcuaGFzRGF0YShhKSYmVy5nZXQoYSk7aWYocSYmKGk9cS5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChMKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9dWEuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuKXtsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixtPWlbbl18fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK28uam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZwIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLG8scS5oYW5kbGUpIT09ITF8fHIucmVtb3ZlRXZlbnQoYSxuLHEuaGFuZGxlKSxkZWxldGUgaVtuXSl9ZWxzZSBmb3IobiBpbiBpKXIuZXZlbnQucmVtb3ZlKGEsbitiW2pdLGMsZCwhMCk7ci5pc0VtcHR5T2JqZWN0KGkpJiZXLnJlbW92ZShhLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZhciBiPXIuZXZlbnQuZml4KGEpLGMsZCxlLGYsZyxoLGk9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGo9KFcuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdfHxbXSxrPXIuZXZlbnQuc3BlY2lhbFtiLnR5cGVdfHx7fTtmb3IoaVswXT1iLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWlbY109YXJndW1lbnRzW2NdO2lmKGIuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYikhPT0hMSl7aD1yLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxiLGopLGM9MDt3aGlsZSgoZj1oW2MrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtiLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGQ9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2QrK10pJiYhYi5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWIucm5hbWVzcGFjZSYmIWIucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGIuaGFuZGxlT2JqPWcsYi5kYXRhPWcuZGF0YSxlPSgoci5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYi5yZXN1bHQ9ZSk9PT0hMSYmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYiksYi5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGcsaD1bXSxpPWIuZGVsZWdhdGVDb3VudCxqPWEudGFyZ2V0O2lmKGkmJmoubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09YS50eXBlJiZhLmJ1dHRvbj49MSkpZm9yKDtqIT09dGhpcztqPWoucGFyZW50Tm9kZXx8dGhpcylpZigxPT09ai5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8ai5kaXNhYmxlZCE9PSEwKSl7Zm9yKGY9W10sZz17fSxjPTA7YzxpO2MrKylkPWJbY10sZT1kLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWdbZV0mJihnW2VdPWQubmVlZHNDb250ZXh0P3IoZSx0aGlzKS5pbmRleChqKT4tMTpyLmZpbmQoZSx0aGlzLG51bGwsW2pdKS5sZW5ndGgpLGdbZV0mJmYucHVzaChkKTtmLmxlbmd0aCYmaC5wdXNoKHtlbGVtOmosaGFuZGxlcnM6Zn0pfXJldHVybiBqPXRoaXMsaTxiLmxlbmd0aCYmaC5wdXNoKHtlbGVtOmosaGFuZGxlcnM6Yi5zbGljZShpKX0pLGh9LGFkZFByb3A6ZnVuY3Rpb24oYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoci5FdmVudC5wcm90b3R5cGUsYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OnIuaXNGdW5jdGlvbihiKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gYih0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W2FdfSxzZXQ6ZnVuY3Rpb24oYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pfX0pfSxmaXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbci5leHBhbmRvXT9hOm5ldyByLkV2ZW50KGEpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09eGEoKSYmdGhpcy5mb2N1cylyZXR1cm4gdGhpcy5mb2N1cygpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzPT09eGEoKSYmdGhpcy5ibHVyKXJldHVybiB0aGlzLmJsdXIoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZihcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJkIodGhpcyxcImlucHV0XCIpKXJldHVybiB0aGlzLmNsaWNrKCksITF9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBCKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxyLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxyLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiByLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT92YTp3YSx0aGlzLnRhcmdldD1hLnRhcmdldCYmMz09PWEudGFyZ2V0Lm5vZGVUeXBlP2EudGFyZ2V0LnBhcmVudE5vZGU6YS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWEuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9YS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9YSxiJiZyLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxyLm5vdygpLHZvaWQodGhpc1tyLmV4cGFuZG9dPSEwKSk6bmV3IHIuRXZlbnQoYSxiKX0sci5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnIuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOndhLGlzUHJvcGFnYXRpb25TdG9wcGVkOndhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOndhLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sci5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYnV0dG9uO3JldHVybiBudWxsPT1hLndoaWNoJiZzYS50ZXN0KGEudHlwZSk/bnVsbCE9YS5jaGFyQ29kZT9hLmNoYXJDb2RlOmEua2V5Q29kZTohYS53aGljaCYmdm9pZCAwIT09YiYmdGEudGVzdChhLnR5cGUpPzEmYj8xOjImYj8zOjQmYj8yOjA6YS53aGljaH19LHIuZXZlbnQuYWRkUHJvcCksci5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7ci5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxyLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxyLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHlhKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmoscihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPXdhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciB6YT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxBYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxCYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLENhPS9edHJ1ZVxcLyguKikvLERhPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBFYShhLGIpe3JldHVybiBCKGEsXCJ0YWJsZVwiKSYmQigxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9yKFwiPnRib2R5XCIsYSlbMF18fGE6YX1mdW5jdGlvbiBGYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBHYShhKXt2YXIgYj1DYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gSGEoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihXLmhhc0RhdGEoYSkmJihmPVcuYWNjZXNzKGEpLGc9Vy5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2M8ZDtjKyspci5ldmVudC5hZGQoYixlLGpbZV1bY10pfVguaGFzRGF0YShhKSYmKGg9WC5hY2Nlc3MoYSksaT1yLmV4dGVuZCh7fSxoKSxYLnNldChiLGkpKX19ZnVuY3Rpb24gSWEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmamEudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6XCJpbnB1dFwiIT09YyYmXCJ0ZXh0YXJlYVwiIT09Y3x8KGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiBKYShhLGIsYyxkKXtiPWcuYXBwbHkoW10sYik7dmFyIGUsZixoLGksaixrLGw9MCxtPWEubGVuZ3RoLG49bS0xLHE9YlswXSxzPXIuaXNGdW5jdGlvbihxKTtpZihzfHxtPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhby5jaGVja0Nsb25lJiZCYS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtzJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksSmEoZixiLGMsZCl9KTtpZihtJiYoZT1xYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGY9ZS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1mKSxmfHxkKSl7Zm9yKGg9ci5tYXAobmEoZSxcInNjcmlwdFwiKSxGYSksaT1oLmxlbmd0aDtsPG07bCsrKWo9ZSxsIT09biYmKGo9ci5jbG9uZShqLCEwLCEwKSxpJiZyLm1lcmdlKGgsbmEoaixcInNjcmlwdFwiKSkpLGMuY2FsbChhW2xdLGosbCk7aWYoaSlmb3Ioaz1oW2gubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsci5tYXAoaCxHYSksbD0wO2w8aTtsKyspaj1oW2xdLGxhLnRlc3Qoai50eXBlfHxcIlwiKSYmIVcuYWNjZXNzKGosXCJnbG9iYWxFdmFsXCIpJiZyLmNvbnRhaW5zKGssaikmJihqLnNyYz9yLl9ldmFsVXJsJiZyLl9ldmFsVXJsKGouc3JjKTpwKGoudGV4dENvbnRlbnQucmVwbGFjZShEYSxcIlwiKSxrKSl9cmV0dXJuIGF9ZnVuY3Rpb24gS2EoYSxiLGMpe2Zvcih2YXIgZCxlPWI/ci5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fHIuY2xlYW5EYXRhKG5hKGQpKSxkLnBhcmVudE5vZGUmJihjJiZyLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmb2EobmEoZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1yLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHphLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1yLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKG8ubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fHIuaXNYTUxEb2MoYSkpKWZvcihnPW5hKGgpLGY9bmEoYSksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylJYShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxuYShhKSxnPWd8fG5hKGgpLGQ9MCxlPWYubGVuZ3RoO2Q8ZTtkKyspSGEoZltkXSxnW2RdKTtlbHNlIEhhKGEsaCk7cmV0dXJuIGc9bmEoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZvYShnLCFpJiZuYShhLFwic2NyaXB0XCIpKSxofSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlPXIuZXZlbnQuc3BlY2lhbCxmPTA7dm9pZCAwIT09KGM9YVtmXSk7ZisrKWlmKFUoYykpe2lmKGI9Y1tXLmV4cGFuZG9dKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cyllW2RdP3IuZXZlbnQucmVtb3ZlKGMsZCk6ci5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO2NbVy5leHBhbmRvXT12b2lkIDB9Y1tYLmV4cGFuZG9dJiYoY1tYLmV4cGFuZG9dPXZvaWQgMCl9fX0pLHIuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIEthKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP3IudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9RWEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihyLmNsZWFuRGF0YShuYShhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsIT1hJiZhLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gci5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIUFhLnRlc3QoYSkmJiFtYVsoa2EuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPXIuaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtjPGQ7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihyLmNsZWFuRGF0YShuYShiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7ci5pbkFycmF5KHRoaXMsYSk8MCYmKHIuY2xlYW5EYXRhKG5hKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksci5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPXIoYSksZj1lLmxlbmd0aC0xLGc9MDtnPD1mO2crKyljPWc9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCkscihlW2ddKVtiXShjKSxoLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBMYT0vXm1hcmdpbi8sTWE9bmV3IFJlZ0V4cChcIl4oXCIrYWErXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksTmE9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfTshZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7aWYoaSl7aS5zdHlsZS5jc3NUZXh0PVwiYm94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsaS5pbm5lckhUTUw9XCJcIixyYS5hcHBlbmRDaGlsZChoKTt2YXIgYj1hLmdldENvbXB1dGVkU3R5bGUoaSk7Yz1cIjElXCIhPT1iLnRvcCxnPVwiMnB4XCI9PT1iLm1hcmdpbkxlZnQsZT1cIjRweFwiPT09Yi53aWR0aCxpLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsZj1cIjRweFwiPT09Yi5tYXJnaW5SaWdodCxyYS5yZW1vdmVDaGlsZChoKSxpPW51bGx9fXZhciBjLGUsZixnLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGk9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuc3R5bGUmJihpLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixpLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixvLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1pLnN0eWxlLmJhY2tncm91bmRDbGlwLGguc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsaC5hcHBlbmRDaGlsZChpKSxyLmV4dGVuZChvLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxjfSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBiKCksZX0scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBiKCksZn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxnfX0pKX0oKTtmdW5jdGlvbiBPYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fE5hKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSxcIlwiIT09Z3x8ci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPXIuc3R5bGUoYSxiKSksIW8ucGl4ZWxNYXJnaW5SaWdodCgpJiZNYS50ZXN0KGcpJiZMYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIFBhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBRYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sUmE9L14tLS8sU2E9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFRhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sVWE9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFZhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBXYShhKXtpZihhIGluIFZhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9VWEubGVuZ3RoO3doaWxlKGMtLSlpZihhPVVhW2NdK2IsYSBpbiBWYSlyZXR1cm4gYX1mdW5jdGlvbiBYYShhKXt2YXIgYj1yLmNzc1Byb3BzW2FdO3JldHVybiBifHwoYj1yLmNzc1Byb3BzW2FdPVdhKGEpfHxhKSxifWZ1bmN0aW9uIFlhKGEsYixjKXt2YXIgZD1iYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gWmEoYSxiLGMsZCxlKXt2YXIgZixnPTA7Zm9yKGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjA7Zjw0O2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1yLmNzcyhhLGMrY2FbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1yLmNzcyhhLFwicGFkZGluZ1wiK2NhW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPXIuY3NzKGEsXCJib3JkZXJcIitjYVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiAkYShhLGIsYyl7dmFyIGQsZT1OYShhKSxmPU9hKGEsYixlKSxnPVwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpO3JldHVybiBNYS50ZXN0KGYpP2Y6KGQ9ZyYmKG8uYm94U2l6aW5nUmVsaWFibGUoKXx8Zj09PWEuc3R5bGVbYl0pLFwiYXV0b1wiPT09ZiYmKGY9YVtcIm9mZnNldFwiK2JbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpXSksZj1wYXJzZUZsb2F0KGYpfHwwLGYrWmEoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZSkrXCJweFwiKX1yLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPU9hKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9ci5jYW1lbENhc2UoYiksaT1SYS50ZXN0KGIpLGo9YS5zdHlsZTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmpbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPWJhLmV4ZWMoYykpJiZlWzFdJiYoYz1mYShhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KHIuY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksby5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGpbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaT9qLnNldFByb3BlcnR5KGIsYyk6altiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYik7cmV0dXJuIGl8fChiPVhhKGgpKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPU9hKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gVGEmJihlPVRhW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLHIuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtpZihjKXJldHVybiFRYS50ZXN0KHIuY3NzKGEsXCJkaXNwbGF5XCIpKXx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD8kYShhLGIsZCk6ZWEoYSxTYSxmdW5jdGlvbigpe3JldHVybiAkYShhLGIsZCl9KX0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJk5hKGEpLGc9ZCYmWmEoYSxiLGQsXCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPWJhLmV4ZWMoYykpJiZcInB4XCIhPT0oZVszXXx8XCJweFwiKSYmKGEuc3R5bGVbYl09YyxjPXIuY3NzKGEsYikpLFlhKGEsYyxnKX19fSksci5jc3NIb29rcy5tYXJnaW5MZWZ0PVBhKG8ucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7aWYoYilyZXR1cm4ocGFyc2VGbG9hdChPYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1lYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxyLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ZDw0O2QrKyllW2ErY2FbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sTGEudGVzdChhKXx8KHIuY3NzSG9va3NbYStiXS5zZXQ9WWEpfSksci5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYoQXJyYXkuaXNBcnJheShiKSl7Zm9yKGQ9TmEoYSksZT1iLmxlbmd0aDtnPGU7ZysrKWZbYltnXV09ci5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP3Iuc3R5bGUoYSxiLGMpOnIuY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIF9hKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBfYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfXIuVHdlZW49X2EsX2EucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpfYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxyLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KHIuY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOl9hLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPV9hLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1yLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sX2EucHJvdG90eXBlLmluaXQucHJvdG90eXBlPV9hLnByb3RvdHlwZSxfYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1yLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7ci5meC5zdGVwW2EucHJvcF0/ci5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW3IuY3NzUHJvcHNbYS5wcm9wXV0mJiFyLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6ci5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sX2EucHJvcEhvb2tzLnNjcm9sbFRvcD1fYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxyLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sci5meD1fYS5wcm90b3R5cGUuaW5pdCxyLmZ4LnN0ZXA9e307dmFyIGFiLGJiLGNiPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxkYj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGViKCl7YmImJihkLmhpZGRlbj09PSExJiZhLnJlcXVlc3RBbmltYXRpb25GcmFtZT9hLnJlcXVlc3RBbmltYXRpb25GcmFtZShlYik6YS5zZXRUaW1lb3V0KGViLHIuZnguaW50ZXJ2YWwpLHIuZngudGljaygpKX1mdW5jdGlvbiBmYigpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXthYj12b2lkIDB9KSxhYj1yLm5vdygpfWZ1bmN0aW9uIGdiKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDtkPDQ7ZCs9Mi1iKWM9Y2FbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gaGIoYSxiLGMpe2Zvcih2YXIgZCxlPShrYi50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChrYi50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2Y8ZztmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIGliKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9XCJ3aWR0aFwiaW4gYnx8XCJoZWlnaHRcImluIGIsbT10aGlzLG49e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmZGEoYSkscT1XLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChnPXIuX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWcudW5xdWV1ZWQmJihnLnVucXVldWVkPTAsaD1nLmVtcHR5LmZpcmUsZy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7Zy51bnF1ZXVlZHx8aCgpfSksZy51bnF1ZXVlZCsrLG0uYWx3YXlzKGZ1bmN0aW9uKCl7bS5hbHdheXMoZnVuY3Rpb24oKXtnLnVucXVldWVkLS0sci5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxnLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLGNiLnRlc3QoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW5bZF09cSYmcVtkXXx8ci5zdHlsZShhLGQpfWlmKGk9IXIuaXNFbXB0eU9iamVjdChiKSxpfHwhci5pc0VtcHR5T2JqZWN0KG4pKXtsJiYxPT09YS5ub2RlVHlwZSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9cSYmcS5kaXNwbGF5LG51bGw9PWomJihqPVcuZ2V0KGEsXCJkaXNwbGF5XCIpKSxrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLFwibm9uZVwiPT09ayYmKGo/az1qOihpYShbYV0sITApLGo9YS5zdHlsZS5kaXNwbGF5fHxqLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksaWEoW2FdKSkpLChcImlubGluZVwiPT09a3x8XCJpbmxpbmUtYmxvY2tcIj09PWsmJm51bGwhPWopJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJmbG9hdFwiKSYmKGl8fChtLmRvbmUoZnVuY3Rpb24oKXtvLmRpc3BsYXk9an0pLG51bGw9PWomJihrPW8uZGlzcGxheSxqPVwibm9uZVwiPT09az9cIlwiOmspKSxvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbS5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpLGk9ITE7Zm9yKGQgaW4gbilpfHwocT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Vy5hY2Nlc3MoYSxcImZ4c2hvd1wiLHtkaXNwbGF5Omp9KSxmJiYocS5oaWRkZW49IXApLHAmJmlhKFthXSwhMCksbS5kb25lKGZ1bmN0aW9uKCl7cHx8aWEoW2FdKSxXLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihkIGluIG4pci5zdHlsZShhLGQsbltkXSl9KSksaT1oYihwP3FbZF06MCxkLG0pLGQgaW4gcXx8KHFbZF09aS5zdGFydCxwJiYoaS5lbmQ9aS5zdGFydCxpLnN0YXJ0PTApKX19ZnVuY3Rpb24gamIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1yLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLEFycmF5LmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPXIuY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBrYihhLGIsYyl7dmFyIGQsZSxmPTAsZz1rYi5wcmVmaWx0ZXJzLmxlbmd0aCxoPXIuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPWFifHxmYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtnPGk7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksZjwxJiZpP2M6KGl8fGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpyLmV4dGVuZCh7fSxiKSxvcHRzOnIuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpyLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOmFifHxmYigpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9ci5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtjPGQ7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihqYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtmPGc7ZisrKWlmKGQ9a2IucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIHIuaXNGdW5jdGlvbihkLnN0b3ApJiYoci5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPXIucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiByLm1hcChrLGhiLGopLHIuaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpLHIuZngudGltZXIoci5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksan1yLkFuaW1hdGlvbj1yLmV4dGVuZChrYix7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gZmEoYy5lbGVtLGEsYmEuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtyLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChMKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKyljPWFbZF0sa2IudHdlZW5lcnNbY109a2IudHdlZW5lcnNbY118fFtdLGtiLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W2liXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP2tiLnByZWZpbHRlcnMudW5zaGlmdChhKTprYi5wcmVmaWx0ZXJzLnB1c2goYSl9fSksci5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/ci5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxyLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIXIuaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIHIuZngub2ZmP2QuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2YgZC5kdXJhdGlvbiYmKGQuZHVyYXRpb24gaW4gci5meC5zcGVlZHM/ZC5kdXJhdGlvbj1yLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpkLmR1cmF0aW9uPXIuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1kLnF1ZXVlJiZkLnF1ZXVlIT09ITB8fChkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ci5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZyLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sci5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoZGEpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ci5pc0VtcHR5T2JqZWN0KGEpLGY9ci5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPWtiKHRoaXMsci5leHRlbmQoe30sYSksZik7KGV8fFcuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1yLnRpbWVycyxnPVcuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmRiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fHIuZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Vy5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1yLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsci5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7YjxnO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxyLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9ci5mbltiXTtyLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShnYihiLCEwKSxhLGQsZSl9fSksci5lYWNoKHtzbGlkZURvd246Z2IoXCJzaG93XCIpLHNsaWRlVXA6Z2IoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmdiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLHIudGltZXJzPVtdLHIuZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPXIudGltZXJzO2ZvcihhYj1yLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fHIuZnguc3RvcCgpLGFiPXZvaWQgMH0sci5meC50aW1lcj1mdW5jdGlvbihhKXtyLnRpbWVycy5wdXNoKGEpLHIuZnguc3RhcnQoKX0sci5meC5pbnRlcnZhbD0xMyxyLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7YmJ8fChiYj0hMCxlYigpKX0sci5meC5zdG9wPWZ1bmN0aW9uKCl7YmI9bnVsbH0sci5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sci5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPXIuZng/ci5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLG8uY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxvLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsby5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgbGIsbWI9ci5leHByLmF0dHJIYW5kbGU7ci5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIuYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/ci5wcm9wKGEsYixjKTooMT09PWYmJnIuaXNYTUxEb2MoYSl8fChlPXIuYXR0ckhvb2tzW2IudG9Mb3dlckNhc2UoKV18fChyLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2xiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCByLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPXIuZmluZC5hdHRyKGEsYiksXG5udWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIW8ucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmQihhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTAsZT1iJiZiLm1hdGNoKEwpO2lmKGUmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZVtkKytdKWEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGxiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/ci5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sci5lYWNoKHIuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPW1iW2JdfHxyLmZpbmQuYXR0cjttYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZixnPWIudG9Mb3dlckNhc2UoKTtyZXR1cm4gZHx8KGY9bWJbZ10sbWJbZ109ZSxlPW51bGwhPWMoYSxiLGQpP2c6bnVsbCxtYltnXT1mKSxlfX0pO3ZhciBuYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLG9iPS9eKD86YXxhcmVhKSQvaTtyLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsci5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tyLnByb3BGaXhbYV18fGFdfSl9fSksci5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoYj1yLnByb3BGaXhbYl18fGIsZT1yLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpuYi50ZXN0KGEubm9kZU5hbWUpfHxvYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLG8ub3B0U2VsZWN0ZWR8fChyLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO2ImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksci5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe3IucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTtmdW5jdGlvbiBwYihhKXt2YXIgYj1hLm1hdGNoKEwpfHxbXTtyZXR1cm4gYi5qb2luKFwiIFwiKX1mdW5jdGlvbiBxYihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ci5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIscWIodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goTCl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9cWIoYyksZD0xPT09Yy5ub2RlVHlwZSYmXCIgXCIrcGIoZSkrXCIgXCIpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9cGIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIscWIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goTCl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9cWIoYyksZD0xPT09Yy5ub2RlVHlwZSYmXCIgXCIrcGIoZSkrXCIgXCIpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1wYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHFiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPXIodGhpcyksZj1hLm1hdGNoKEwpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9cWIodGhpcyksYiYmVy5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOlcuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrcGIocWIoYykpK1wiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciByYj0vXFxyL2c7ci5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPXIuaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxyKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6QXJyYXkuaXNBcnJheShlKSYmKGU9ci5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPXIudmFsSG9va3NbdGhpcy50eXBlXXx8ci52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1yLnZhbEhvb2tzW2UudHlwZV18fHIudmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKHJiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksci5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpwYihyLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9YS5vcHRpb25zLGY9YS5zZWxlY3RlZEluZGV4LGc9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGUsaD1nP251bGw6W10saT1nP2YrMTplLmxlbmd0aDtmb3IoZD1mPDA/aTpnP2Y6MDtkPGk7ZCsrKWlmKGM9ZVtkXSwoYy5zZWxlY3RlZHx8ZD09PWYpJiYhYy5kaXNhYmxlZCYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFCKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1yKGMpLnZhbCgpLGcpcmV0dXJuIGI7aC5wdXNoKGIpfXJldHVybiBofSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9ci5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPXIuaW5BcnJheShyLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxyLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7ci52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7aWYoQXJyYXkuaXNBcnJheShiKSlyZXR1cm4gYS5jaGVja2VkPXIuaW5BcnJheShyKGEpLnZhbCgpLGIpPi0xfX0sby5jaGVja09ufHwoci52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgc2I9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO3IuZXh0ZW5kKHIuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosayxtLG4sbz1bZXx8ZF0scD1sLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscT1sLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaD1pPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFzYi50ZXN0KHArci5ldmVudC50cmlnZ2VyZWQpJiYocC5pbmRleE9mKFwiLlwiKT4tMSYmKHE9cC5zcGxpdChcIi5cIikscD1xLnNoaWZ0KCkscS5zb3J0KCkpLGs9cC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcCxiPWJbci5leHBhbmRvXT9iOm5ldyByLkV2ZW50KHAsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXEuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitxLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06ci5tYWtlQXJyYXkoYyxbYl0pLG49ci5ldmVudC5zcGVjaWFsW3BdfHx7fSxmfHwhbi50cmlnZ2VyfHxuLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFuLm5vQnViYmxlJiYhci5pc1dpbmRvdyhlKSl7Zm9yKGo9bi5kZWxlZ2F0ZVR5cGV8fHAsc2IudGVzdChqK3ApfHwoaD1oLnBhcmVudE5vZGUpO2g7aD1oLnBhcmVudE5vZGUpby5wdXNoKGgpLGk9aDtpPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJm8ucHVzaChpLmRlZmF1bHRWaWV3fHxpLnBhcmVudFdpbmRvd3x8YSl9Zz0wO3doaWxlKChoPW9bZysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWc+MT9qOm4uYmluZFR5cGV8fHAsbT0oVy5nZXQoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJlcuZ2V0KGgsXCJoYW5kbGVcIiksbSYmbS5hcHBseShoLGMpLG09ayYmaFtrXSxtJiZtLmFwcGx5JiZVKGgpJiYoYi5yZXN1bHQ9bS5hcHBseShoLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1wLGZ8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG4uX2RlZmF1bHQmJm4uX2RlZmF1bHQuYXBwbHkoby5wb3AoKSxjKSE9PSExfHwhVShlKXx8ayYmci5pc0Z1bmN0aW9uKGVbcF0pJiYhci5pc1dpbmRvdyhlKSYmKGk9ZVtrXSxpJiYoZVtrXT1udWxsKSxyLmV2ZW50LnRyaWdnZXJlZD1wLGVbcF0oKSxyLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaSYmKGVba109aSkpLGIucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXIuZXh0ZW5kKG5ldyByLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO3IuZXZlbnQudHJpZ2dlcihkLG51bGwsYil9fSksci5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07aWYoYylyZXR1cm4gci5ldmVudC50cmlnZ2VyKGEsYixjLCEwKX19KSxyLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksci5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfX0pLG8uZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gYSxvLmZvY3VzaW58fHIuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7ci5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LHIuZXZlbnQuZml4KGEpKX07ci5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVcuYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksVy5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1XLmFjY2VzcyhkLGIpLTE7ZT9XLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLFcucmVtb3ZlKGQsYikpfX19KTt2YXIgdGI9YS5sb2NhdGlvbix1Yj1yLm5vdygpLHZiPS9cXD8vO3IucGFyc2VYTUw9ZnVuY3Rpb24oYil7dmFyIGM7aWYoIWJ8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBudWxsO3RyeXtjPShuZXcgYS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhiLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yz12b2lkIDB9cmV0dXJuIGMmJiFjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxyLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciB3Yj0vXFxbXFxdJC8seGI9L1xccj9cXG4vZyx5Yj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksemI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlO2lmKEFycmF5LmlzQXJyYXkoYikpci5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx3Yi50ZXN0KGEpP2QoYSxlKTpBYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9ZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PXIudHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUFiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9ci5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe3ZhciBjPXIuaXNGdW5jdGlvbihiKT9iKCk6YjtkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PWM/XCJcIjpjKX07aWYoQXJyYXkuaXNBcnJheShhKXx8YS5qcXVlcnkmJiFyLmlzUGxhaW5PYmplY3QoYSkpci5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlBYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKX0sci5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiByLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9ci5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9yLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFyKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ6Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYheWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IWphLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9cih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOkFycmF5LmlzQXJyYXkoYyk/ci5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIEJiPS8lMjAvZyxDYj0vIy4qJC8sRGI9LyhbPyZdKV89W14mXSovLEViPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sRmI9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sR2I9L14oPzpHRVR8SEVBRCkkLyxIYj0vXlxcL1xcLy8sSWI9e30sSmI9e30sS2I9XCIqL1wiLmNvbmNhdChcIipcIiksTGI9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTtMYi5ocmVmPXRiLmhyZWY7ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEwpfHxbXTtpZihyLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gTmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09SmI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxyLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBPYihhLGIpe3ZhciBjLGQsZT1yLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZyLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gUGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31pZihmKXJldHVybiBmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl19ZnVuY3Rpb24gUWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1yLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6dGIuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpGYi50ZXN0KHRiLnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpLYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6ci5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/T2IoT2IoYSxyLmFqYXhTZXR0aW5ncyksYik6T2Ioci5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6TWIoSWIpLGFqYXhUcmFuc3BvcnQ6TWIoSmIpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZSxmLGcsaCxpLGosayxsLG0sbixvPXIuYWpheFNldHVwKHt9LGMpLHA9by5jb250ZXh0fHxvLHE9by5jb250ZXh0JiYocC5ub2RlVHlwZXx8cC5qcXVlcnkpP3IocCk6ci5ldmVudCxzPXIuRGVmZXJyZWQoKSx0PXIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdT1vLnN0YXR1c0NvZGV8fHt9LHY9e30sdz17fSx4PVwiY2FuY2VsZWRcIix5PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoayl7aWYoIWgpe2g9e307d2hpbGUoYj1FYi5leGVjKGcpKWhbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9aFthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGs/ZzpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWsmJihhPXdbYS50b0xvd2VyQ2FzZSgpXT13W2EudG9Mb3dlckNhc2UoKV18fGEsdlthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1rJiYoby5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoayl5LmFsd2F5cyhhW3kuc3RhdHVzXSk7ZWxzZSBmb3IoYiBpbiBhKXVbYl09W3VbYl0sYVtiXV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHg7cmV0dXJuIGUmJmUuYWJvcnQoYiksQSgwLGIpLHRoaXN9fTtpZihzLnByb21pc2UoeSksby51cmw9KChifHxvLnVybHx8dGIuaHJlZikrXCJcIikucmVwbGFjZShIYix0Yi5wcm90b2NvbCtcIi8vXCIpLG8udHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxvLm1ldGhvZHx8by50eXBlLG8uZGF0YVR5cGVzPShvLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChMKXx8W1wiXCJdLG51bGw9PW8uY3Jvc3NEb21haW4pe2o9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ai5ocmVmPW8udXJsLGouaHJlZj1qLmhyZWYsby5jcm9zc0RvbWFpbj1MYi5wcm90b2NvbCtcIi8vXCIrTGIuaG9zdCE9ai5wcm90b2NvbCtcIi8vXCIrai5ob3N0fWNhdGNoKHope28uY3Jvc3NEb21haW49ITB9fWlmKG8uZGF0YSYmby5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIG8uZGF0YSYmKG8uZGF0YT1yLnBhcmFtKG8uZGF0YSxvLnRyYWRpdGlvbmFsKSksTmIoSWIsbyxjLHkpLGspcmV0dXJuIHk7bD1yLmV2ZW50JiZvLmdsb2JhbCxsJiYwPT09ci5hY3RpdmUrKyYmci5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLG8udHlwZT1vLnR5cGUudG9VcHBlckNhc2UoKSxvLmhhc0NvbnRlbnQ9IUdiLnRlc3Qoby50eXBlKSxmPW8udXJsLnJlcGxhY2UoQ2IsXCJcIiksby5oYXNDb250ZW50P28uZGF0YSYmby5wcm9jZXNzRGF0YSYmMD09PShvLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYoby5kYXRhPW8uZGF0YS5yZXBsYWNlKEJiLFwiK1wiKSk6KG49by51cmwuc2xpY2UoZi5sZW5ndGgpLG8uZGF0YSYmKGYrPSh2Yi50ZXN0KGYpP1wiJlwiOlwiP1wiKStvLmRhdGEsZGVsZXRlIG8uZGF0YSksby5jYWNoZT09PSExJiYoZj1mLnJlcGxhY2UoRGIsXCIkMVwiKSxuPSh2Yi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrdWIrKyArbiksby51cmw9ZituKSxvLmlmTW9kaWZpZWQmJihyLmxhc3RNb2RpZmllZFtmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixyLmxhc3RNb2RpZmllZFtmXSksci5ldGFnW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsci5ldGFnW2ZdKSksKG8uZGF0YSYmby5oYXNDb250ZW50JiZvLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixvLmNvbnRlbnRUeXBlKSx5LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixvLmRhdGFUeXBlc1swXSYmby5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXT9vLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW8uZGF0YVR5cGVzWzBdP1wiLCBcIitLYitcIjsgcT0wLjAxXCI6XCJcIik6by5hY2NlcHRzW1wiKlwiXSk7Zm9yKG0gaW4gby5oZWFkZXJzKXkuc2V0UmVxdWVzdEhlYWRlcihtLG8uaGVhZGVyc1ttXSk7aWYoby5iZWZvcmVTZW5kJiYoby5iZWZvcmVTZW5kLmNhbGwocCx5LG8pPT09ITF8fGspKXJldHVybiB5LmFib3J0KCk7aWYoeD1cImFib3J0XCIsdC5hZGQoby5jb21wbGV0ZSkseS5kb25lKG8uc3VjY2VzcykseS5mYWlsKG8uZXJyb3IpLGU9TmIoSmIsbyxjLHkpKXtpZih5LnJlYWR5U3RhdGU9MSxsJiZxLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt5LG9dKSxrKXJldHVybiB5O28uYXN5bmMmJm8udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LmFib3J0KFwidGltZW91dFwiKX0sby50aW1lb3V0KSk7dHJ5e2s9ITEsZS5zZW5kKHYsQSl9Y2F0Y2goeil7aWYoayl0aHJvdyB6O0EoLTEseil9fWVsc2UgQSgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBBKGIsYyxkLGgpe3ZhciBqLG0sbix2LHcseD1jO2t8fChrPSEwLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix5LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmYjwzMDB8fDMwND09PWIsZCYmKHY9UGIobyx5LGQpKSx2PVFiKG8sdix5LGopLGo/KG8uaWZNb2RpZmllZCYmKHc9eS5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKHIubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eS5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKHIuZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1vLnR5cGU/eD1cIm5vY29udGVudFwiOjMwND09PWI/eD1cIm5vdG1vZGlmaWVkXCI6KHg9di5zdGF0ZSxtPXYuZGF0YSxuPXYuZXJyb3Isaj0hbikpOihuPXgsIWImJnh8fCh4PVwiZXJyb3JcIixiPDAmJihiPTApKSkseS5zdGF0dXM9Yix5LnN0YXR1c1RleHQ9KGN8fHgpK1wiXCIsaj9zLnJlc29sdmVXaXRoKHAsW20seCx5XSk6cy5yZWplY3RXaXRoKHAsW3kseCxuXSkseS5zdGF0dXNDb2RlKHUpLHU9dm9pZCAwLGwmJnEudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt5LG8saj9tOm5dKSx0LmZpcmVXaXRoKHAsW3kseF0pLGwmJihxLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeSxvXSksLS1yLmFjdGl2ZXx8ci5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geX0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHIuZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHIuZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksci5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe3JbYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIHIuaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLHIuYWpheChyLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sci5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksci5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gci5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxyLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gdGhpc1swXSYmKHIuaXNGdW5jdGlvbihhKSYmKGE9YS5jYWxsKHRoaXNbMF0pKSxiPXIoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiByLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPXIodGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9ci5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnBhcmVudChhKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtyKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLHIuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4hci5leHByLnBzZXVkb3MudmlzaWJsZShhKX0sci5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hIShhLm9mZnNldFdpZHRofHxhLm9mZnNldEhlaWdodHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LHIuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX07dmFyIFJiPXswOjIwMCwxMjIzOjIwNH0sU2I9ci5hamF4U2V0dGluZ3MueGhyKCk7by5jb3JzPSEhU2ImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBTYixvLmFqYXg9U2I9ISFTYixyLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYil7dmFyIGMsZDtpZihvLmNvcnN8fFNiJiYhYi5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoUmJbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19KSxyLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oYSl7YS5jcm9zc0RvbWFpbiYmKGEuY29udGVudHMuc2NyaXB0PSExKX0pLHIuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiByLmdsb2JhbEV2YWwoYSksYX19fSksci5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxyLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7Yj1yKFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZmKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxkLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIFRiPVtdLFViPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87ci5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9VGIucG9wKCl8fHIuZXhwYW5kbytcIl9cIit1YisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksci5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihVYi50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJjA9PT0oYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVWIudGVzdChiLmRhdGEpJiZcImRhdGFcIik7aWYoaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0pcmV0dXJuIGU9Yi5qc29ucENhbGxiYWNrPXIuaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKFViLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KHZiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fHIuZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/cihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxUYi5wdXNoKGUpKSxnJiZyLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSxvLmNyZWF0ZUhUTUxEb2N1bWVudD1mdW5jdGlvbigpe3ZhciBhPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09YS5jaGlsZE5vZGVzLmxlbmd0aH0oKSxyLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuW107XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpO3ZhciBlLGYsZztyZXR1cm4gYnx8KG8uY3JlYXRlSFRNTERvY3VtZW50PyhiPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLGU9Yi5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxlLmhyZWY9ZC5sb2NhdGlvbi5ocmVmLGIuaGVhZC5hcHBlbmRDaGlsZChlKSk6Yj1kKSxmPUMuZXhlYyhhKSxnPSFjJiZbXSxmP1tiLmNyZWF0ZUVsZW1lbnQoZlsxXSldOihmPXFhKFthXSxiLGcpLGcmJmcubGVuZ3RoJiZyKGcpLnJlbW92ZSgpLHIubWVyZ2UoW10sZi5jaGlsZE5vZGVzKSl9LHIuZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPXBiKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxyLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZyLmFqYXgoe3VybDphLHR5cGU6ZXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP3IoXCI8ZGl2PlwiKS5hcHBlbmQoci5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5hbHdheXMoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goZnVuY3Rpb24oKXtjLmFwcGx5KHRoaXMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSl9KSx0aGlzfSxyLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxyLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gci5ncmVwKHIudGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofSxyLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPXIuY3NzKGEsXCJwb3NpdGlvblwiKSxsPXIoYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1yLmNzcyhhLFwidG9wXCIpLGk9ci5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxyLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsci5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxyLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7ci5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZCxlLGY9dGhpc1swXTtpZihmKXJldHVybiBmLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhkPWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYj1mLm93bmVyRG9jdW1lbnQsYz1iLmRvY3VtZW50RWxlbWVudCxlPWIuZGVmYXVsdFZpZXcse3RvcDpkLnRvcCtlLnBhZ2VZT2Zmc2V0LWMuY2xpZW50VG9wLGxlZnQ6ZC5sZWZ0K2UucGFnZVhPZmZzZXQtYy5jbGllbnRMZWZ0fSk6e3RvcDowLGxlZnQ6MH19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1yLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLEIoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQ9e3RvcDpkLnRvcCtyLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksbGVmdDpkLmxlZnQrci5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKX0pLHt0b3A6Yi50b3AtZC50b3Atci5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtci5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmXCJzdGF0aWNcIj09PXIuY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxyYX0pfX0pLHIuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1cInBhZ2VZT2Zmc2V0XCI9PT1iO3IuZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY7cmV0dXJuIHIuaXNXaW5kb3coYSk/Zj1hOjk9PT1hLm5vZGVUeXBlJiYoZj1hLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1lP2Y/ZltiXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/Zi5wYWdlWE9mZnNldDplLGM/ZTpmLnBhZ2VZT2Zmc2V0KTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCl9fSksci5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09UGEoby5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7aWYoYylyZXR1cm4gYz1PYShhLGIpLE1hLnRlc3QoYyk/cihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjfSl9KSxyLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7ci5mbltkXT1mdW5jdGlvbihlLGYpe3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGg9Y3x8KGU9PT0hMHx8Zj09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihiLGMsZSl7dmFyIGY7cmV0dXJuIHIuaXNXaW5kb3coYik/MD09PWQuaW5kZXhPZihcIm91dGVyXCIpP2JbXCJpbm5lclwiK2FdOmIuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGY9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZltcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGZbXCJvZmZzZXRcIithXSxmW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1lP3IuY3NzKGIsYyxoKTpyLnN0eWxlKGIsYyxlLGgpfSxiLGc/ZTp2b2lkIDAsZyl9fSl9KSxyLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pLHIuaG9sZFJlYWR5PWZ1bmN0aW9uKGEpe2E/ci5yZWFkeVdhaXQrKzpyLnJlYWR5KCEwKX0sci5pc0FycmF5PUFycmF5LmlzQXJyYXksci5wYXJzZUpTT049SlNPTi5wYXJzZSxyLm5vZGVOYW1lPUIsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiByfSk7dmFyIFZiPWEualF1ZXJ5LFdiPWEuJDtyZXR1cm4gci5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1yJiYoYS4kPVdiKSxiJiZhLmpRdWVyeT09PXImJihhLmpRdWVyeT1WYikscn0sYnx8KGEualF1ZXJ5PWEuJD1yKSxyfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2pxdWVyeS0zLjIuMS5taW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3MvaW5kZXgubGVzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbGVzcy9pbmRleC5sZXNzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGVzcy9ub3RlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2xlc3Mvbm90ZS5sZXNzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGVzcy90b3Rhcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9sZXNzL3RvdGFzLmxlc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==