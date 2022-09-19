System.register(['./ce0388ed.js'],(function(exports){'use strict';var Tt,D,yt,at,Ve,Ye,Ot,Ie,Z,J,Q,le,y,w,Lt,kt,ve,He,Ke,Rt,ge,$e,_e;return{setters:[function(module){Tt=module.T;D=module.D;yt=module.y;at=module.a;Ve=module.V;Ye=module.Y;Ot=module.O;Ie=module.I;Z=module.Z;J=module.J;Q=module.Q;le=module.l;y=module.b;w=module.w;Lt=module.L;kt=module.k;ve=module.v;He=module.H;Ke=module.K;Rt=module.R;ge=module.g;$e=module.$;_e=module._;}],execute:(function(){exports('default',App);var clearSelection = () => {
  if (window.getSelection) {
    // @ts-ignore
    if (window.getSelection().empty) { // Chrome
    // @ts-ignore
      window.getSelection().empty();
    // @ts-ignore
    } else if (window.getSelection().removeAllRanges) { // Firefox
    // @ts-ignore
      window.getSelection().removeAllRanges();
    }
    // @ts-ignore
  } else if (document.selection) { // IE?
    // @ts-ignore
    document.selection.empty();
  }
};/* eslint-disable @typescript-eslint/explicit-function-return-type */

const [
  DashboardContextmenu,
  useContextmenu,
  createContextmenu
] = (() => {
  
  
  let lastCEvent;

  const $cmenuFn = Tt(null);

  const hideDashboardContextmenu = () => {
    if ($cmenuFn.$) {
      Z($cmenuFn.$[1].node );
      $cmenuFn.$ = null;
    }
  };
  
  const useContextmenu = (fn, self) =>
    (ctx) => D(
      ctx.node, 'contextmenu-prevent-stop' + (!self ? '' : '-self'), (e) => {
        lastCEvent = e, $cmenuFn.$ = [fn, ctx];
      }
    );

  function DashboardContextmenu(
    
  ) {
    const $client = yt({ X: 0, Y: 0 });
    // const $opacity = subject<number>(0)
    
    const resizer = (e) => {
      const w = e.width, h = e.height;

      let { X, Y } = $client.$;

      // $opacity.$ = 0
      // console.log(111, e)
      X = lastCEvent.clientX;
      Y = lastCEvent.clientY;
      if (X + w > window.innerWidth) X -= w;
      if (Y + h > window.innerHeight) Y -= h;
      if (X < 0) X = 0;
      if (Y < 0) Y = 0;
      // $opacity.$ = 1

      $client.$ = { X, Y };
    }
  
    ;(
        at(/*r1.$*/$cmenuFn)(([cmenuFn, ctx]) => {
            Ve("div", { class: ['position-fixed', 'top-0', 'bottom-0', 'start-0', 'end-0'], "style--z-index": "1" }, [J('tapstart-self', hideDashboardContextmenu), J('contextmenu-capture-prevent-stop', [])])(Ye(() => {
            Ot(window, 'resize', hideDashboardContextmenu);
            clearSelection()
            // setTimeout(unfocus, 1000)

            // console.log(ctx)
  
            ;(
                    Ve("div", { class: [
                  'position-fixed',
                  'animated zoomIn',
                  'dropdown-menu dropdown-menu-dark show'
                ], style: "--animate-duration: 0.125s", "style--left": /*r2.$*/le([$client], (_$0) => (_$0[0].X + 'px')), "style--top": /*r2.$*/le([$client], (_$0) => (_$0[0].Y + 'px')) }, [Q(resizer), J('click-prevent-stop', hideDashboardContextmenu)])(Ye(() => { cmenuFn(ctx); }))

            );
          }));

      })

    );
  }

  const createContextmenu = (
    SCHEMA
  ) => (ctx) => {
    for (const schema of SCHEMA) {
      if (schema) {
          Ve("li")(
    Ve("button", { type: "button", class: "dropdown-item" }, [J('click', () => { schema.click(ctx); })])(
      Ve("span")(
        Ie(/*r1.$*/schema.title)
      ),
      at(/*r1.$*/schema.key)(() => {
        Ve("span", { class: "ms-3 float-end" })(
          Ie(/*r1.$*/schema.key)
        );
      })
    )
  );

      } else {
          Ve("li")(
    Ve("hr", { class: "dropdown-divider" })()
  );

      }
    }
  };

  // DashboardContextmenu.css = <style jsx>{`
  // .card * {
  //   color: inherit !important;
  //   background: inherit !important;
  // }
  // `}</style>

  return [DashboardContextmenu, useContextmenu, createContextmenu]
})();const resize = () => { $windowForResize.set(window); };

const $windowForResize =
 Tt(window, () => {
   window.addEventListener('resize', resize, true);
   return () => {
     window.removeEventListener('resize', resize, true);
   }
 });

// export { $innerHeight, $innerWidth, $outerHeight, $outerWidth }

const $isVertical = Tt(
  false,
  ($value) =>
    y($windowForResize, (w, is) => {
      if (is[0] !== (is[0] = w.innerWidth < w.innerHeight)) is[1].$ = is[0];
    }, [$value.$, $value])
);

// listenEventGlobal(window, 'resize', (e) => {
//   console.log(222, e)
// })

// listenResizeGlobal(document.body, (e) => {
//   console.log(111, e)
// })
const noop = (() => {}); 

const dataget = (
  E, key
) => E.getAttribute('data-' + key);const __random__ = Math.random;

const { round, ceil, floor, max, min } = Math;

const random = () => __random__() || random();

const randomTo = (
  min,
  max = min
) => round(random() * (max - min) + min);

const __parseFloat__ = parseFloat;const random_string = () => randomTo(1e16, 9e16).toString(36);/* eslint-disable */

var a = e => {
    e.stopPropagation(), e.cancelable && e.preventDefault();
}, n = e => {
    var t = 0, o = 0;
    if ("touches" in e) {
        var a = e.touches[0];
        a && (t = a.clientX, o = a.clientY);
    } else t = e.clientX, o = e.clientY;
    return [ t, o ];
}, i = (t, o) => i => {
    var r = i.node, d = {
        ctx: i,
        isDown: !1,
        isMove: !1,
        dx: 0,
        dy: 0,
        ox: 0,
        oy: 0
    }, s = [ D(r, "tapstart-capture", ((e, t) => {
        var o = e.detail.event;
        t.isDown = !0, t.isMove = !1, t.ox = t.oy = 0, [t.dx, t.dy] = n(o);
    }), d), D(document, "tapmove-capture", ((e, i) => {
        var r = e.detail.event;
        if (i.isMove) {
            var [d, s] = n(r), l = d - i.dx, v = s - i.dy;
            i.ox += l, i.oy += v, a(r), t({
                type: "move",
                event: r,
                detail: o,
                delta: {
                    x: l,
                    y: v
                },
                offset: {
                    x: i.ox,
                    y: i.oy
                }
            }, i.ctx), i.dx = d, i.dy = s;
        } else i.isDown && (i.isDown = !1, i.isMove = !0, a(r), t({
            type: "start",
            event: r,
            detail: o,
            delta: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            }
        }, i.ctx));
    }), d), D(document, "tapend-capture", ((e, n) => {
        if (n.isMove) {
            var i = e.detail.event;
            n.isDown = n.isMove = !1, a(i), t({
                type: "end",
                event: i,
                detail: o,
                delta: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: n.ox,
                    y: n.oy
                }
            }, n.ctx);
        } else n.isDown && (n.isDown = !1);
    }), d) ];
    return () => {
        for (var e = s.length; e-- > 0; ) s[e]();
    };
};/* eslint-disable */
/*
dester builds:
index.ts
*/
var r = (r, a, v) => {
    var e = 1;
    a < 0 && (a = -a), r < 0 && (e = -1, r = -r);
    var t = (r += a) % a;
    r -= t + a;
    var u = e > 0 ? t >= a / 2 : t > a / 2;
    return u && (r += a), v && (r += a * v * e, t && e > 0 !== (v < 0 && !u || v > 0 && u) || (r -= (v > 0 ? a : -a) * e)), 
    r && r * e;
};/* eslint-disable @typescript-eslint/explicit-function-return-type */

// @ts-ignore
// window.aliquot = aliquot

const $GRID_SIZE = Tt(50);
const $GRID_COEF = Tt(
  { W: 2, H: 2 },
  ($val) =>
    w(
      [$windowForResize, $GRID_SIZE], ([window, gridSize], [val, $val]) => {
        const w = window.innerWidth, h = window.innerHeight;
        const ws = w / gridSize, wc = r(ws, 6) || r(ws, 4) || r(ws, 3) || 2;
        const hs = h / (w / wc), hc = r(hs, 6) || r(hs, 4) || r(hs, 3) || 2;
        const W = 100 / wc, H = 100 / hc;
        if (val.W !== W || val.H !== H) val.W = W, val.H = H, $val.next(val);
      }, [$val.$, $val]
    )
);

const $HOVERED_WINDOW = Tt(null);
const $FOCUSED_WINDOW = Tt(null);

let Z_INDEX = 1;
const Z_INDEXES = {};
const COLLAPSES = {};

const visibleAllWindows = () => {
  for (const id in COLLAPSES) COLLAPSES[id].$ = false;
};
const collapseAllWindows = () => {
  for (const id in COLLAPSES) COLLAPSES[id].$ = true;
};

const setZIndex = (
  lastZindex,
  ctx
) => {
  if (Z_INDEX > 4e9) {
    Z_INDEX = 1; for (const id in Z_INDEXES) Z_INDEXES[id].$ = ++Z_INDEX;
    lastZindex.$ = ++Z_INDEX;
  } else if (Z_INDEX !== lastZindex.$) {
    lastZindex.$ = ++Z_INDEX;
  }
  $HOVERED_WINDOW.$ = $FOCUSED_WINDOW.$ = ctx;
};

const title_btn = (
  name,
  bg,
  onClick
) => {
    Ve("button", { type: "button", class: [
      'btn btn-sm bg-white text-' + bg,
      'p-0 lh-1 rounded-pill',
      'd-inline-flex justify-content-center align-items-center align-content-center'
    ], style: "width:1.625em;height:1.625em;margin-left:0.625em;" }, [J('click', onClick)])(
    Ve("i", { role: "img", "aria-label": /*r1.$*/name, class: /*r2.$*/le([name], (_$0) => ([`bi-${_$0[0]}-circle-fill`])), style: "font-size:1.8em;" })()
  );

};

const resize_div = (type, style) => {
    Ve("div", { style: `position:absolute;z-index:1;cursor:${type}-resize;${style}`, "data-resize": type })();

};

const $IS_RESIZE_GRID = Tt('');
const showResizeGrid = (cursor) => { $IS_RESIZE_GRID.$ = cursor; };
const hideResizeGrid = () => { $IS_RESIZE_GRID.$ = ''; };
const desktopResizeGrid = ($styleTop$) => {
  const imageColor = 'rgba(128,128,128,0.25)';
  const image = `linear-gradient(to right, ${imageColor} 1px,transparent 1px),linear-gradient(to bottom,${imageColor} 1px,transparent 1px)`
  ;(
      Ve("div", { class: ['position-absolute', 'bottom-0', 'start-0', 'end-0'], style: /*r2.$*/le([$GRID_COEF, $IS_RESIZE_GRID, $styleTop$], (_$0) => (['z-index:1', {
        top            : _$0[2],
        cursor         : _$0[1],
        display        : _$0[1] ? 'block' : 'none',
        backgroundImage: image,
        backgroundSize : `${_$0[0].W}% ${_$0[0].H}%`
      }])) }, [J('contextmenu-prevent-stop', noop)])()

  );
};

const setSize = (wh, coef) => 100 / __parseFloat__(wh) * coef;

function DesktopWindow(
  
  {
    component,
    componentProps,
    title,
    isFullscreen,
    top,
    left,
    right,
    bottom
  }








 = {}) {
  const ctx = this;
  const pub = ctx.pub;
  pub.component = component;
  const id = pub.id = 'w' + random_string();

  /*
    BEGIN SIZES
  */
  const w = randomTo(30, 50), h = randomTo(30, 50);
  if (top == null) top = randomTo(0, 100 - h);
  if (left == null) left = randomTo(0, 100 - w);
  if (right == null) right = randomTo(0, 100 - w - left);
  if (bottom == null) bottom = randomTo(0, 100 - h - top);
  
  const setTop = (v) =>
    top = r(max(v, 0), $GRID_COEF.$.H);
  const setLeft = (v) =>
    left = r(min(v, 100 - $GRID_COEF.$.W), $GRID_COEF.$.W);
  const setRight = (v) =>
    right = r(min(v, 100 - $GRID_COEF.$.W), $GRID_COEF.$.W);
  const setBottom = (v) =>
    bottom = r(min(v, 100 - $GRID_COEF.$.H), $GRID_COEF.$.H);
  setTop(top), setLeft(left), setRight(right), setBottom(bottom);
  /*
    END SIZES
  */

  /*--------------------------------------------------------------------------*/

  /*
    BEGIN $title
  */
  const $title = pub.$title = yt('');
  Lt(title, (title) => { $title.$ = '' + (title || id); });
  /*
    END $title
  */

  /*--------------------------------------------------------------------------*/

  /*
    BEGIN $isFullscreen
  */
  const $fullscreenIcon = yt('');
  const $fullscreenLabel = yt('');
  const $fullscreenTransition = yt(false);
  const $isFullscreen = pub.$isFullscreen = yt(!!isFullscreen);
  kt($isFullscreen, (isFullscreen, [$Icon, $Label, $Transition]) => {
    if (!isFullscreen) $Label.$ = 'Развернуть', $Icon.$ = 'arrow-up-right';
    else $Label.$ = 'Восстановить', $Icon.$ = 'arrow-down-left';
    $Transition.$ = true, setTimeout(() => { $Transition.$ = false; }, 250);
  }, [$fullscreenIcon, $fullscreenLabel, $fullscreenTransition]);
  /*
    END $isFullscreen
  */

  /*
    BEGIN $zIndex
  */
  const $zIndex = Z_INDEXES[id] = yt(++Z_INDEX);
  ve(() => { delete Z_INDEXES[id]; });
  /*
    END $zIndex
  */

  /*
    BEGIN $isHovered and $isFocused
  */
  const $isHovered = pub.$isHovered = yt(false);
  const $isFocused = pub.$isFocused = yt(false);
  kt($isHovered, (is, [ctx]) => {
    if ((ctx.pub.isHovered = is) !== ($HOVERED_WINDOW.$ === ctx)) {
      $HOVERED_WINDOW.$ = is ? ctx : null;
    }
  }, [ctx]);
  kt($isFocused, (is, [ctx, $zIndex]) => {
    if ((ctx.pub.isFocused = is) !== ($FOCUSED_WINDOW.$ === ctx)) {
      $FOCUSED_WINDOW.$ = is ? (setZIndex($zIndex, ctx), ctx) : null;
    }
  }, [ctx, $zIndex]);
  kt($HOVERED_WINDOW, (HW, [ctx, $h]) => { $h.$ = HW === ctx; }, [ctx, $isHovered]);
  kt($FOCUSED_WINDOW, (FW, [ctx, $f]) => { $f.$ = FW === ctx; }, [ctx, $isFocused]);
  const inhover = () => { $isHovered.$ = true; };
  const infocus = () => { $isFocused.$ = true; };
  const unhover = () => { $isHovered.$ = false; };
  const unfocus = () => { $isFocused.$ = false; };
  /*
    END $isHovered and $isFocused
  */

  /*
    BEGIN $isCollapsed
  */
  const $isCollapsed = COLLAPSES[id] = pub.$isCollapsed = yt(false);
  ve(() => { delete COLLAPSES[id]; });
  const $isCollapsedWindow = yt(false);
  kt($isCollapsed, (isCollapsed) => {
    if (!isCollapsed) $isCollapsedWindow.$ = false;
    else {
      Z();
      setTimeout(() => { $isCollapsedWindow.$ = true; }, 250);
    }
  });
  /*
    END $isCollapsed
  */

  const windowClose = () => { Z(), Rt(this); };
  const toggleFullscreen = () => { $isFullscreen.$ = !$isFullscreen.$; };
  const toggleCollapsed = () => { $isCollapsed.$ = !$isCollapsed.$; }

  ;(
      Ve("div", { id: id, class: /*r2.$*/le([$isCollapsed, $isCollapsedWindow], (_$0) => ([
        'card',
        'position-absolute',
        'bg-dark text-white',
        'animated',
        _$0[1] && 'd-none',
        _$0[0] ? 'zoomOut' : 'zoomIn'
      ])), style: /*r2.$*/le([$fullscreenTransition, $GRID_COEF, $isFullscreen], (_$0) => (['--animate-duration:0.25s', {
        top   : (_$0[2] ? 0 : top) + '%',
        left  : (_$0[2] ? 0 : left) + '%',
        right : (_$0[2] ? 0 : right) + '%',
        bottom: (_$0[2] ? 0 : bottom) + '%',
        
        minWidth : _$0[1].W + '%',
        minHeight: _$0[1].H + '%',
      }, _$0[0] && 'transition: all 0.25s'])), "style--zIndex": /*r1.$*/$zIndex }, [J('inhover', inhover), J('infocus', infocus), J('unhover', unhover), J('unfocus', unfocus), 
        i((e, ctx) => {
          const [typeA, $isFs, setTop, setLeft, setRight, setBottom] = e.detail;

          if (e.type === 'start' && !$isFs.$) {
            typeA[0] = dataget(e.event.target , 'resize'); 
          }

          if (typeA[0]) {
            const dr = typeA[0];
            const node = ctx.node; 

            let style;
            if (e.type === 'start') {
              style = getComputedStyle(node);
              showResizeGrid(dr === 'move' ? dr : dr + '-resize');
            } else {
              style = node.style;
            }

            let t, l, r, b;

            if (dr === 'move' || dr[0] === 'n') {
              t = __parseFloat__(style.top) + e.delta.y;
            }
            if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
              l = __parseFloat__(style.left) + e.delta.x;
            }
            if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
              r = __parseFloat__(style.right) - e.delta.x;
            }
            if (dr === 'move' || dr[0] === 's') {
              b = __parseFloat__(style.bottom) - e.delta.y;
            }

            style = node.style;
            if (e.type === 'end') {
              typeA[0] = null;
              hideResizeGrid();
              const pes = getComputedStyle(node.parentElement);
              if (dr === 'move' || dr[0] === 'n') {
                style.top = setTop(setSize(pes.height, t)) + '%';
              }
              if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                style.left = setLeft(setSize(pes.width, l)) + '%';
              }
              if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                style.right = setRight(setSize(pes.width, r)) + '%';
              }
              if (dr === 'move' || dr[0] === 's') {
                style.bottom = setBottom(setSize(pes.height, b)) + '%';
              }
            } else {
              clearSelection();
              if (dr === 'move' || dr[0] === 'n') {
                style.top = t + 'px';
              }
              if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                style.left = l + 'px';
              }
              if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                style.right = r + 'px';
              }
              if (dr === 'move' || dr[0] === 's') {
                style.bottom = b + 'px';
              }
            }
          }
        }, [[null], $isFullscreen, setTop, setLeft, setRight, setBottom])
      ])(
    Ve("div", { class: /*r2.$*/le([$isFocused], (_$0) => ([
          'card-header',
          'd-flex align-items-center',
          'p-1 overflow-hidden user-select-none',
          _$0[0] ? 'bg-primary' : 'bg-secondary'
        ])), style: "z-index:1", "style--opacity": /*r2.$*/le([$isHovered], (_$0) => (_$0[0] ? 1 : 0.875)) }, [useContextmenu(createContextmenu([
          { title: 'Свернуть', click: toggleCollapsed },
          { title: $fullscreenLabel, click: toggleFullscreen },,
          { title: 'Закрыть', click: windowClose }
        ]))])(
      Ve("div", { class: ['flex-fill', 'text-truncate', 'px-1'], style: "margin-bottom:-0.0625em", "data-resize": "move" }, [J('dblclick', toggleFullscreen)])(
        Ie(/*r1.$*/$title)
      ),
      Ve("div", { class: "text-nowrap" })(
        He((
            title_btn('dash', 'dark', toggleCollapsed),
            title_btn($fullscreenIcon, 'dark', toggleFullscreen),
            title_btn('x', 'danger', windowClose)
          ))
      )
    ),
    Ve("div", { class: ['card-body', 'position-relative'], "style--z-index": "1" })(
      Ve("div", { style: 'z-index:1;position:absolute;top:2px;bottom:2px;left:2px;right:2px;' })(Ye(() => {
            if (pub.component) (        Ke(pub.component, { ...(componentProps || {}) })([])
);
            else (        He('empty')
);
          })),
      Ve("div", { class: ['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100'], "style--display": /*r2.$*/le([$isFocused], (_$0) => (_$0[0] ? 'none' : 'block')), "style--backgroundColor": 'rgba(0,0,0,0.125)', "style--z-index": "1" }, [J('contextmenu-prevent-stop', noop)])()
    ),
    at(/*r2.$*/le([$isFullscreen], (_$0) => (!_$0[0])))(() => {
        /* RESIZE TOP */
        resize_div('n', 'top:-0.25em;left:0;width:100%;height:0.5em;');
        /* RESIZE BOTTOM */
        resize_div('s', 'bottom:-0.25em;left:0;width:100%;height:0.5em;');
        /* RESIZE LEFT */
        resize_div('w', 'top:0;left:-0.25em;width:0.5em;height:100%;');
        /* RESIZE RIGHT */
        resize_div('e', 'top:0;right:-0.25em;width:0.5em;height:100%;');
        /* RESIZE TOP-LEFT */
        resize_div('nw', 'top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;');
        /* RESIZE TOP-RIGHT */
        resize_div('ne', 'top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;');
        /* RESIZE BOTTOM-LEFT */
        resize_div('sw', 'bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;');
        /* RESIZE BOTTOM-RIGHT */
        resize_div('se', 'bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;');
      })
  )

  );
}/* eslint-disable @typescript-eslint/explicit-function-return-type */



function DashboardTopbarSettings(
  
) {
    Ve("div")(
    He("DashboardTopbarSettings")
  );

}/* eslint-disable @typescript-eslint/explicit-function-return-type */

function DashboardTopbar(
  
) {
    Ve("div", { class: ['position-absolute', 'w-100', 'top-0', 'left-0'], "style--z-index": "1", "style--height": '2em', "style--backgroundColor": 'rgba(0,0,0,0.75)' }, [useContextmenu(createContextmenu([
      {
        title: 'Настройки панели',
        click: (ctx) => {
          ge(ctx.root.pub.DashboardDesktop, () => {
                  Ke(DesktopWindow, { title: "Настройки панели", component: DashboardTopbarSettings })([]);

          }, []);
        }
      },,
    
      { title: 'Показать все окна', click: visibleAllWindows },
      { title: 'Свернуть все окна', click: collapseAllWindows }
    ]))])(
  );

}/* eslint-disable @typescript-eslint/explicit-function-return-type */


// import { subjectGlobal } from 'rease'

// const $q = subjectGlobal<number>(1)

// $q.subscribe((v) => {
//   console.log('1', v)
// })

// const u2 = $q.subscribe((v) => {
//   console.log('2', v)
// })

// $q.subscribe((v) => {
//   console.log('3', v)
// })

// $q.subscribe((v, _ctx, u4) => {
//   console.log('4', v)
//   if (v === 2) u2()
// })

// $q.subscribe((v) => {
//   console.log('5', v)
// })

// const u6 = $q.subscribe((v) => {
//   console.log('6', v)
// })

// $q.subscribe((v) => {
//   console.log('7', v)
// })

// $q.subscribe((v) => {
//   console.log('8', v)
// })

// $q.subscribe((v) => {
//   console.log('9', v)
// })

// $q.$++

function DashboardDesktopSettings(
  
) {
    Ve("div")(
    $e('qweqwe'),
    He("DashboardDesktopSettings")
  );

}// export const linesSchema = (): number[][] => {
//   const res: number[][] = []
//   const l1 = randomTo(0, 360), l2 = l1 + 45
//   for (let i = 9; i-- > 0;) {
//     res.push([randomTo(0, 360), random() * 99, randomTo(l1, l2) * (random() - 1)])
//   }
//   return res
// }

const linesSchema = () => {
  const res = [], plus = randomTo(1, 11) * 30;
  let l1 = randomTo(0, 360), l2 = l1 + 30;
  for (let i = 9; i-- > 0;) {
    res.push([randomTo(0, 360), random() * 99, randomTo(l1, l2)]);
    l1 += plus, l2 += plus;
  }
  return res
};

const createLinesBySchema = (
  schema, s, l
) => {
  const res = [];
  for (let a, i = schema.length; i-- > 0;) {
    a = schema[i];
    res.push(`linear-gradient(${
      a[0]
    }deg, ${
      i ? 'transparent 0%' : `hsl(${a[2] + -45},${s}%,${l}%) 0%`
    }, hsl(${a[2]},${s}%,${l}%) ${a[1]}%, ${
      i ? `transparent ${a[1] + 0.25}%` : `hsl(${a[2] + 45},${s}%,${l}%) 100%`
    })`);
  }

  return '' + res
};const $BACKGROUND_SCHEMA = Tt(
  [],
  // ($value) => {
  // console.log($value)
  // let int: any
  // const update = (): void => {
  //   const value = $value.$ as number[][]
  //   for (let i = value.length; i-- > 0;) {
  //     value[i][0] = (value[i][0] + (i % 2 ? 0.1 : -0.1)) % 360
  //   }
  //   $value.set(value)
  //   int = requestAnimationFrame(update)
  // }

  // update()
  // return () => { cancelAnimationFrame(int) }
  // }
);
const changeBackground = () => { $BACKGROUND_SCHEMA.$ = linesSchema(); };

changeBackground();

D(null, 'KeyQ', () => {
  changeBackground();
});/* eslint-disable @typescript-eslint/explicit-function-return-type */


// console.log(EXTENSIONS)

function DashboardDesktop(
  
) {
  const styleTop = '2em'
  ;(
      Ve("div", { class: ['position-absolute', 'bottom-0', 'start-0', 'end-0'], "style--z-index": "1", "style--top": styleTop })(
    He((this.root.pub.DashboardDesktop = _e(), '')),
    Ve("div", { class: /*r2.$*/le([$isVertical], (_$0) => ([
          'w-auto h-auto',
          'position-absolute top-0 start-0 end-0 bottom-0',
          'd-flex flex-wrap align-items-start align-content-start justify-content-center',
          'overflow-auto',
          _$0[0] ? 'flex-column' : 'flex-row'
          // 'text-break'
          // 'd-flex align-items-center align-content-center justify-content-center'
        ])), "style--z-index": "1" }, [J('wheel', (e, ctx) => {
          if (!e.defaultPrevented && e.button === 0 &&
          !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
            const node = ctx.node; 
            if (node.scrollBy) {
              e.preventDefault();
              const delta = e.deltaY;
              $isVertical.$ ? node.scrollBy(delta, 0) : node.scrollBy(0, delta);
            }
          }
        }), 
          useContextmenu(createContextmenu([
            { title: 'Создать файл', click: () => {} },
            { title: 'Создать папку', click: () => {} },,
          
            {
              title: 'Настройки',
              click: (ctx) => {
                ge(ctx.root.pub.DashboardDesktop, () => {
                          Ke(DesktopWindow, { title: "Параметры рабочего стола", component: DashboardDesktopSettings })([]);

                }, []);
              }
            },,
  
            { title: 'Показать все окна', click: visibleAllWindows },
            { title: 'Свернуть все окна', click: collapseAllWindows },,
          
            { title: '__Изменить фон__', key: '(Q)', click: changeBackground },
            {
              title: '__Создать пустое окно__',
              click: (ctx) => {
                ge(ctx.root.pub.DashboardDesktop, () => {
                          Ke(DesktopWindow)([]);

                }, []);
              }
            },
          ]))
        ])(
    )
  )

  );
  desktopResizeGrid(styleTop);
}/* eslint-disable @typescript-eslint/explicit-function-return-type */

function Dashboard(
  
) {
    Ve("div", { class: ['position-fixed', 'w-100', 'h-100', 'top-0', 'start-0'] })(
    Ve("div", { class: "dashboard", style: 'position:absolute;top:-20px;bottom:-20px;left:-20px;right:-20px;', "style--backgroundColor": '#000', "style--backgroundImage": /*r2.$*/le([$BACKGROUND_SCHEMA], (_$0) => (createLinesBySchema(_$0[0], 100, 50))) })(),
    Ke(DashboardTopbar)([]),
    Ke(DashboardDesktop)([]),
    Ke(DashboardContextmenu)([])
  );

}
// Dashboard.css = <style jsx>{`
// .dashboard {
//   transition: background 5s linear;
//   // background-size: 200% 200%;
//   // animation: gradient 60s ease infinite;
// }

// @keyframes gradient {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
// `}</style>
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function App(
  
) {
    Ke(Dashboard)([]);

}})}}));