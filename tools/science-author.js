/* Authoring helpers. This file is used by build-science.js, not by the browser. */
let page, section, count, current;
const lessons = [];
const f = (term, lines) => ({term, lines});
function p(n, s) { page = n; section = s; count = 0; }
function q(type, stem, answer, fact, options) {
  const item = {type, stem, answer, fact, options, source: {page, section, number: ++count}};
  current.checks.push(item); return item;
}
const m = (s, o, a, f) => q('mcq', s, a, f, o);
const t = (s, a, f) => q('tf', s, a, f);
const r = (s, a, f) => q('recall', s, a, f);
const ms = (s, o, a, f) => q('multi', s, a, f, o);
const u = (s, reason, o) => { const x = q('mcq', s, null, null, o || ['I said my answer to my parent']); x.reason = reason; return x; };
function lesson(number, facts, pairs, chain, questions, notes = []) {
  current = {number, facts, pairs, chain, checks: [], notes}; questions(); lessons.push(current);
}
module.exports = {lessons, f, p, m, t, r, ms, u, lesson};
