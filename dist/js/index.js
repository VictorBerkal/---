"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }

      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    function checkbox() {
      var labelCheckbox = document.querySelectorAll('.car-form-addres_sircle label');
      var btns = document.querySelectorAll('.car-form_btn');

      function removeClass(i) {
        btns[i].classList.remove('car-form_btn__disabled');
      }

      function addClass(i) {
        btns[i].classList.add('car-form_btn__disabled');
      }

      labelCheckbox.forEach(function (elem, i) {
        elem.addEventListener('click', function () {
          if (btns[i].classList.contains('car-form_btn__disabled')) {
            removeClass(i);
          } else {
            addClass(i);
          }
        });
      });
    }

    module.exports = checkbox;
  }, {}],
  2: [function (require, module, exports) {
    // const conFive = require('./five');
    // conFive();
    window.addEventListener('DOMContentLoaded', function () {
      var select = require('./select');

      var checkbox = require('./checkbox');

      checkbox();
      select('.cls-select', '.cls-select__title', '.cls-select__label');
      select('.way-select', '.way-select__title', '.way-select__label');
      select('.loading-select', '.loading-select__title', '.loading-select__label');
      select('.method-select', '.method-select__title', '.method-select__label');
    });
  }, {
    "./checkbox": 1,
    "./select": 3
  }],
  3: [function (require, module, exports) {
    function select(selectSelector, titleSelector, labelSelector) {
      console.log('Burger');
      var selectSingle = document.querySelector(selectSelector);
      var selectSingle_title = selectSingle.querySelector(titleSelector);
      var selectSingle_labels = selectSingle.querySelectorAll(labelSelector); // Toggle menu

      selectSingle_title.addEventListener('click', function () {
        if ('active' === selectSingle.getAttribute('data-state')) {
          selectSingle.setAttribute('data-state', '');
        } else {
          selectSingle.setAttribute('data-state', 'active');
        }
      }); // Close when click to option

      for (var i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', function (evt) {
          selectSingle_title.textContent = evt.target.textContent;
          selectSingle.setAttribute('data-state', '');
        });
      }
    }

    module.exports = select;
  }, {}]
}, {}, [2]);