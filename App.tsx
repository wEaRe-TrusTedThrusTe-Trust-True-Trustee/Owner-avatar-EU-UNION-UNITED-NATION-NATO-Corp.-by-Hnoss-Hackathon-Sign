import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/client/App.tsx");import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react-swc can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/root/app/code/client/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d3e571af"; const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import "/client/global.css?t=1771937700857";
import { Toaster } from "/client/components/ui/toaster.tsx";
import __vite__cjsImport5_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=62d4de29"; const createRoot = __vite__cjsImport5_reactDom_client["createRoot"];
import { Toaster as Sonner } from "/client/components/ui/sonner.tsx";
import { TooltipProvider } from "/client/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=25c99f9e";
import { BrowserRouter, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=26b5c098";
import Index from "/client/pages/Index.tsx?t=1771937700857";
import NotFound from "/client/pages/NotFound.tsx";
import __vite__cjsImport12_react from "/node_modules/.vite/deps/react.js?v=f67fde59"; const useEffect = __vite__cjsImport12_react["useEffect"];
const queryClient = new QueryClient();
const AppContent = ()=>{
    _s();
    useEffect(()=>{
        // Force dark mode for LCL theme
        document.documentElement.classList.add("dark");
    }, []);
    return /*#__PURE__*/ _jsxDEV(BrowserRouter, {
        children: /*#__PURE__*/ _jsxDEV(Routes, {
            children: [
                /*#__PURE__*/ _jsxDEV(Route, {
                    path: "/",
                    element: /*#__PURE__*/ _jsxDEV(Index, {}, void 0, false, {
                        fileName: "/root/app/code/client/App.tsx",
                        lineNumber: 24,
                        columnNumber: 34
                    }, void 0)
                }, void 0, false, {
                    fileName: "/root/app/code/client/App.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(Route, {
                    path: "*",
                    element: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
                        fileName: "/root/app/code/client/App.tsx",
                        lineNumber: 26,
                        columnNumber: 34
                    }, void 0)
                }, void 0, false, {
                    fileName: "/root/app/code/client/App.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/root/app/code/client/App.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/root/app/code/client/App.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(AppContent, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AppContent;
const App = ()=>/*#__PURE__*/ _jsxDEV(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsxDEV(TooltipProvider, {
            children: [
                /*#__PURE__*/ _jsxDEV(Toaster, {}, void 0, false, {
                    fileName: "/root/app/code/client/App.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(Sonner, {}, void 0, false, {
                    fileName: "/root/app/code/client/App.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(AppContent, {}, void 0, false, {
                    fileName: "/root/app/code/client/App.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/root/app/code/client/App.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/root/app/code/client/App.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this);
_c1 = App;
createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "/root/app/code/client/App.tsx",
    lineNumber: 42,
    columnNumber: 53
}, this));
var _c, _c1;
$RefreshReg$(_c, "AppContent");
$RefreshReg$(_c1, "App");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/root/app/code/client/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/root/app/code/client/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9nbG9iYWwuY3NzXCI7XG5cbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgVG9hc3RlciBhcyBTb25uZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Nvbm5lclwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEluZGV4IGZyb20gXCIuL3BhZ2VzL0luZGV4XCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vcGFnZXMvTm90Rm91bmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5jb25zdCBBcHBDb250ZW50ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZvcmNlIGRhcmsgbW9kZSBmb3IgTENMIHRoZW1lXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxJbmRleCAvPn0gLz5cbiAgICAgICAgey8qIEFERCBBTEwgQ1VTVE9NIFJPVVRFUyBBQk9WRSBUSEUgQ0FUQ0gtQUxMIFwiKlwiIFJPVVRFICovfVxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4gICAgICA8L1JvdXRlcz5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICk7XG59O1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgIDxUb29sdGlwUHJvdmlkZXI+XG4gICAgICA8VG9hc3RlciAvPlxuICAgICAgPFNvbm5lciAvPlxuICAgICAgPEFwcENvbnRlbnQgLz5cbiAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuKTtcblxuY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikhKS5yZW5kZXIoPEFwcCAvPik7XG4iXSwibmFtZXMiOlsiVG9hc3RlciIsImNyZWF0ZVJvb3QiLCJTb25uZXIiLCJUb29sdGlwUHJvdmlkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJJbmRleCIsIk5vdEZvdW5kIiwidXNlRWZmZWN0IiwicXVlcnlDbGllbnQiLCJBcHBDb250ZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXRoIiwiZWxlbWVudCIsIkFwcCIsImNsaWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLGVBQWU7QUFFdEIsU0FBU0EsT0FBTyxRQUFRLDBCQUEwQjtBQUNsRCxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNELFdBQVdFLE1BQU0sUUFBUSx5QkFBeUI7QUFDM0QsU0FBU0MsZUFBZSxRQUFRLDBCQUEwQjtBQUMxRCxTQUFTQyxXQUFXLEVBQUVDLG1CQUFtQixRQUFRLHdCQUF3QjtBQUN6RSxTQUFTQyxhQUFhLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxRQUFRLG1CQUFtQjtBQUNoRSxPQUFPQyxXQUFXLGdCQUFnQjtBQUNsQyxPQUFPQyxjQUFjLG1CQUFtQjtBQUN4QyxTQUFTQyxTQUFTLFFBQVEsUUFBUTtBQUVsQyxNQUFNQyxjQUFjLElBQUlSO0FBRXhCLE1BQU1TLGFBQWE7O0lBQ2pCRixVQUFVO1FBQ1IsZ0NBQWdDO1FBQ2hDRyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO0lBQ3pDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLFFBQUNYO2tCQUNDLGNBQUEsUUFBQ0M7OzhCQUNDLFFBQUNDO29CQUFNVSxNQUFLO29CQUFJQyx1QkFBUyxRQUFDVjs7Ozs7Ozs7Ozs4QkFFMUIsUUFBQ0Q7b0JBQU1VLE1BQUs7b0JBQUlDLHVCQUFTLFFBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEM7R0FmTUc7S0FBQUE7QUFpQk4sTUFBTU8sTUFBTSxrQkFDVixRQUFDZjtRQUFvQmdCLFFBQVFUO2tCQUMzQixjQUFBLFFBQUNUOzs4QkFDQyxRQUFDSDs7Ozs7OEJBQ0QsUUFBQ0U7Ozs7OzhCQUNELFFBQUNXOzs7Ozs7Ozs7Ozs7Ozs7O01BTERPO0FBVU5uQixXQUFXYSxTQUFTUSxjQUFjLENBQUMsU0FBVUMsTUFBTSxlQUFDLFFBQUNIIn0=