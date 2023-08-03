"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/register/page",{

/***/ "(app-client)/./components/user-auth-form.tsx":
/*!***************************************!*\
  !*** ./components/user-auth-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAuthForm: function() { return /* binding */ UserAuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-client)/./lib/utils.ts\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-client)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-client)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/label */ \"(app-client)/./components/ui/label.tsx\");\n/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useForm */ \"(app-client)/./hooks/useForm.tsx\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useAuth */ \"(app-client)/./hooks/useAuth.tsx\");\n/* harmony import */ var _hooks_useListenForError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useListenForError */ \"(app-client)/./hooks/useListenForError.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ UserAuthForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction UserAuthForm(param) {\n    let { className, type, ...props } = param;\n    _s();\n    const { values, resetForm, handleChange } = (0,_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        email: \"\",\n        password: \"\"\n    });\n    const { error, handleLogin, handleSignup, response, isSignedIn } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    (0,_hooks_useListenForError__WEBPACK_IMPORTED_MODULE_8__.useListenForError)({\n        error: error,\n        success: response\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    console.log(values);\n    const handleAuth = (e)=>{\n        e.preventDefault();\n        type == \"login\" ? handleLogin(values.email, values.password) : handleSignup(values.email, values.password);\n        resetForm();\n    };\n    // Just to see if the user is logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isSignedIn().then((res)=>{\n            res && router.push(\"/dashboard\");\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"grid gap-6\", className),\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleAuth,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                className: \"sr-only\",\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                id: \"email\",\n                                placeholder: \"name@example.com\",\n                                type: \"email\",\n                                autoCapitalize: \"none\",\n                                autoComplete: \"email\",\n                                autoCorrect: \"off\",\n                                value: values.email,\n                                onChange: handleChange,\n                                name: \"email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                className: \"sr-only\",\n                                htmlFor: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                id: \"password\",\n                                placeholder: \"************\",\n                                type: \"password\",\n                                name: \"password\",\n                                autoCapitalize: \"none\",\n                                autoComplete: \"password\",\n                                autoCorrect: \"off\",\n                                value: values.password,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)()),\n                        children: \"Sign In Now!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\keira\\\\Documents\\\\VSCode Projects\\\\Currently Working On\\\\sentinel\\\\app\\\\frontend\\\\components\\\\user-auth-form.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(UserAuthForm, \"0EytmhdWOiBW3G4kEc5eYbyy4og=\", false, function() {\n    return [\n        _hooks_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useListenForError__WEBPACK_IMPORTED_MODULE_8__.useListenForError,\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = UserAuthForm;\nvar _c;\n$RefreshReg$(_c, \"UserAuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy91c2VyLWF1dGgtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ0U7QUFDdUI7QUFDVjtBQUNBO0FBQ1I7QUFDQTtBQUN3QjtBQUM1QjtBQUNVO0FBT3BDLFNBQVNVLGFBQWEsS0FBZ0Q7UUFBaEQsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsT0FBMEIsR0FBaEQ7O0lBQzNCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHWCwwREFBT0EsQ0FBQztRQUFDWSxPQUFPO1FBQUlDLFVBQVU7SUFBRTtJQUM1RSxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUdqQiwwREFBT0E7SUFDMUVDLDJFQUFpQkEsQ0FBQztRQUFDWSxPQUFPQTtRQUFPSyxTQUFTRjtJQUFRO0lBQ2xELE1BQU1HLFNBQVNoQiwwREFBU0E7SUFFeEJpQixRQUFRQyxHQUFHLENBQUNiO0lBRVosTUFBTWMsYUFBYSxDQUFDQztRQUNsQkEsRUFBRUMsY0FBYztRQUVoQmxCLFFBQVEsVUFDTlEsWUFBWU4sT0FBT0csS0FBSyxFQUFFSCxPQUFPSSxRQUFRLElBRXpDRyxhQUFhUCxPQUFPRyxLQUFLLEVBQUVILE9BQU9JLFFBQVE7UUFFNUNIO0lBQ0Y7SUFFQSx1Q0FBdUM7SUFDdkNQLGdEQUFTQSxDQUFDO1FBQ1JlLGFBQ0dRLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSkEsT0FBT1AsT0FBT1EsSUFBSSxDQUFDO1FBQ3JCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOVCxRQUFRQyxHQUFHLENBQUNRO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSXpCLFdBQVdWLDhDQUFFQSxDQUFDLGNBQWNVO1FBQWEsR0FBR0UsS0FBSztrQkFDcEQsNEVBQUN3QjtZQUFLQyxVQUFVVjtzQkFDZCw0RUFBQ1E7Z0JBQUl6QixXQUFVOztrQ0FDYiw4REFBQ3lCO3dCQUFJekIsV0FBVTs7MENBQ2IsOERBQUNQLHVEQUFLQTtnQ0FBQ08sV0FBVTtnQ0FBVTRCLFNBQVE7MENBQVE7Ozs7OzswQ0FHM0MsOERBQUNwQyx1REFBS0E7Z0NBQ0pxQyxJQUFHO2dDQUNIQyxhQUFZO2dDQUNaN0IsTUFBSztnQ0FDTDhCLGdCQUFlO2dDQUNmQyxjQUFhO2dDQUNiQyxhQUFZO2dDQUNaQyxPQUFPL0IsT0FBT0csS0FBSztnQ0FDbkI2QixVQUFVOUI7Z0NBQ1YrQixNQUFLO2dDQUNMQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNaO3dCQUFJekIsV0FBVTs7MENBQ2IsOERBQUNQLHVEQUFLQTtnQ0FBQ08sV0FBVTtnQ0FBVTRCLFNBQVE7MENBQVc7Ozs7OzswQ0FHOUMsOERBQUNwQyx1REFBS0E7Z0NBQ0pxQyxJQUFHO2dDQUNIQyxhQUFZO2dDQUNaN0IsTUFBSztnQ0FDTG1DLE1BQUs7Z0NBQ0xMLGdCQUFlO2dDQUNmQyxjQUFhO2dDQUNiQyxhQUFZO2dDQUNaQyxPQUFPL0IsT0FBT0ksUUFBUTtnQ0FDdEI0QixVQUFVOUI7Z0NBQ1ZnQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNDO3dCQUFPdEMsV0FBV1YsOENBQUVBLENBQUNDLHFFQUFjQTtrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCbkQ7R0E1RmdCUTs7UUFDOEJMLHNEQUFPQTtRQUNnQkMsc0RBQU9BO1FBQzFFQyx1RUFBaUJBO1FBQ0ZFLHNEQUFTQTs7O0tBSlZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci1hdXRoLWZvcm0udHN4P2ZjOTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcbmltcG9ydCB7IGJ1dHRvblZhcmlhbnRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIlxyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiQC9ob29rcy91c2VGb3JtXCJcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIkAvaG9va3MvdXNlQXV0aFwiXHJcbmltcG9ydCB7IHVzZUxpc3RlbkZvckVycm9yIH0gZnJvbSBcIkAvaG9va3MvdXNlTGlzdGVuRm9yRXJyb3JcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuXHJcbmludGVyZmFjZSBVc2VyQXV0aEZvcm1Qcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcbiAgdHlwZTogXCJsb2dpblwiIHwgXCJyZWdpc3RlclwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlckF1dGhGb3JtKHsgY2xhc3NOYW1lLCB0eXBlLCAuLi5wcm9wcyB9OiBVc2VyQXV0aEZvcm1Qcm9wcykge1xyXG4gIGNvbnN0IHsgdmFsdWVzLCByZXNldEZvcm0sIGhhbmRsZUNoYW5nZSB9ID0gdXNlRm9ybSh7ZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwifSlcclxuICBjb25zdCB7IGVycm9yLCBoYW5kbGVMb2dpbiwgaGFuZGxlU2lnbnVwLCByZXNwb25zZSwgaXNTaWduZWRJbiB9ID0gdXNlQXV0aCgpXHJcbiAgdXNlTGlzdGVuRm9yRXJyb3Ioe2Vycm9yOiBlcnJvciwgc3VjY2VzczogcmVzcG9uc2V9KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICBcclxuICBjb25zdCBoYW5kbGVBdXRoID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgdHlwZSA9PSBcImxvZ2luXCIgPyBcclxuICAgICAgaGFuZGxlTG9naW4odmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQpXHJcbiAgICA6XHJcbiAgICAgIGhhbmRsZVNpZ251cCh2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZClcclxuXHJcbiAgICByZXNldEZvcm0oKVxyXG4gIH1cclxuXHJcbiAgLy8gSnVzdCB0byBzZWUgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzU2lnbmVkSW4oKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJlcyAmJiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIilcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJncmlkIGdhcC02XCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBdXRofT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZUBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBhdXRvQ2FwaXRhbGl6ZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKipcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBhdXRvQ2FwaXRhbGl6ZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbihidXR0b25WYXJpYW50cygpKX0+XHJcbiAgICAgICAgICAgIFNpZ24gSW4gTm93IVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQteHMgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kIHB4LTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIE9yIGNvbnRpbnVlIHdpdGhcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudDogXCJvdXRsaW5lXCIgfSkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEljb25zLmdpdEh1YiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxyXG4gICAgICAgIEdpdGh1YlxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJidXR0b25WYXJpYW50cyIsIklucHV0IiwiTGFiZWwiLCJ1c2VGb3JtIiwidXNlQXV0aCIsInVzZUxpc3RlbkZvckVycm9yIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVXNlckF1dGhGb3JtIiwiY2xhc3NOYW1lIiwidHlwZSIsInByb3BzIiwidmFsdWVzIiwicmVzZXRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVTaWdudXAiLCJyZXNwb25zZSIsImlzU2lnbmVkSW4iLCJzdWNjZXNzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUF1dGgiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwicmVzIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJhdXRvQ2FwaXRhbGl6ZSIsImF1dG9Db21wbGV0ZSIsImF1dG9Db3JyZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/user-auth-form.tsx\n"));

/***/ })

});