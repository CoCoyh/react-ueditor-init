var _charMap = {
    "gt": ">",
    "lt": "<",
    "Alpha": "Α",
    "Beta": "Β",
    "Gamma": "Γ",
    "Delta": "Δ",
    "Epsilon": "Ε",
    "Zeta": "Ζ",
    "Eta": "Η",
    "Theta": "Θ",
    "Iota": "Ι",
    "Kappa": "Κ",
    "Lambda": "Λ",
    "Mu": "Μ",
    "Nu": "Ν",
    "Xi": "Ξ",
    "Omicron": "Ο",
    "Pi": "Π",
    "Rho": "Ρ",
    "Sigma": "Σ",
    "Tau": "Τ",
    "Upsilon": "Υ",
    "Phi": "Φ",
    "Chi": "Χ",
    "Psi": "Ψ",
    "Omega": "Ω",
    "alpha": "α",
    "beta": "β",
    "gamma": "γ",
    "delta": "δ",
    "epsilon": "ε",
    "zeta": "ζ",
    "eta": "η",
    "theta": "θ",
    "iota": "ι",
    "kappa": "κ",
    "lambda": "λ",
    "mu": "μ",
    "nu": "ν",
    "xi": "ξ",
    "omicron": "ο",
    "pi": "π",
    "rho": "ρ",
    "sigma": "σ",
    "tau": "τ",
    "upsilon": "υ",
    "phi": "φ",
    "varkappa": "ϰ",
    "chi": "χ",
    "psi": "ψ",
    "omega": "ω",
    "digamma": "Ϝ",
    "varepsilon": "ϵ",
    "varrho": "ϱ",
    "varphi": "ϕ",
    "vartheta": "ϑ",
    "varpi": "ϖ",
    "varsigma": "Ϲ",
    "aleph": "ℵ",
    "beth": "ℶ",
    "daleth": "ℸ",
    "gimel": "ℷ",
    "eth": "ð",
    "hbar": "ℎ",
    "hslash": "ℏ",
    "mho": "℧",
    "partial": "∂",
    "wp": "℘",
    "Game": "⅁",
    "Bbbk": "⅌",
    "Finv": "Ⅎ",
    "Im": "ℑ",
    "Re": "ℜ",
    "complement": "∁",
    "ell": "ℓ",
    "circledS": "Ⓢ",
    "imath": "ı",
    "jmath": "ȷ",
    "doublecap": "⋒",
    "Cap": "⋒",
    "doublecup": "⋓",
    "Cup": "⋓",
    "divideontimes": "⋇",
    "rightthreetimes": "⋌",
    "leftthreetimes": "⋋",
    "cdot": "·",
    "odot": "⊙",
    "dotplus": "∔",
    "rtimes": "⋊",
    "ltimes": "⋉",
    "centerdot": "▪",
    "doublebarwedge": "⌭",
    "setminus": "⒁",
    "amalg": "∐",
    "circ": "◦",
    "bigcirc": "◯",
    "gtrdot": "⋗",
    "lessdot": "⋖",
    "smallsetminus": "⒅",
    "circledast": "⊛",
    "circledcirc": "⊚",
    "sqcap": "⊓",
    "sqcup": "⊔",
    "barwedge": "⊼",
    "circleddash": "⊝",
    "star": "⋆",
    "bigtriangledown": "▽",
    "bigtriangleup": "△",
    "cup": "∪",
    "cap": "∩",
    "times": "×",
    "mp": "∓",
    "pm": "±",
    "triangleleft": "⊲",
    "triangleright": "⊳",
    "boxdot": "⊡",
    "curlyvee": "⋏",
    "curlywedge": "⋎",
    "boxminus": "⊟",
    "boxtimes": "⊠",
    "ominus": "⊖",
    "oplus": "⊕",
    "oslash": "⊘",
    "otimes": "⊗",
    "uplus": "⊎",
    "boxplus": "⊞",
    "dagger": "†",
    "ddagger": "‡",
    "vee": "∨",
    "lor": "∨",
    "veebar": "⊻",
    "bullet": "•",
    "diamond": "⋄",
    "wedge": "∧",
    "land": "∧",
    "div": "÷",
    "wr": "≀",
    "geqq": "≧",
    "lll": "⋘",
    "llless": "⋘",
    "ggg": "⋙",
    "gggtr": "⋙",
    "preccurlyeq": "≼",
    "geqslant": "⩾",
    "lnapprox": "⪉",
    "preceq": "⪯",
    "gg": "≫",
    "lneq": "⪇",
    "precnapprox": "⪹",
    "approx": "≈",
    "lneqq": "≨",
    "precneqq": "⪵",
    "approxeq": "≊",
    "gnapprox": "⪊",
    "lnsim": "⋦",
    "precnsim": "⋨",
    "asymp": "≍",
    "gneq": "⪈",
    "precsim": "≾",
    "backsim": "∽",
    "gneqq": "≩",
    "ncong": "≇",
    "risingdotseq": "≓",
    "backsimeq": "⋍",
    "gnsim": "⋧",
    "sim": "∼",
    "simeq": "≃",
    "bumpeq": "≏",
    "gtrapprox": "⪆",
    "ngeq": "≱",
    "Bumpeq": "≎",
    "gtreqless": "⋛",
    "ngeqq": "⌱",
    "succ": "≻",
    "circeq": "≗",
    "gtreqqless": "⪌",
    "ngeqslant": "⌳",
    "succapprox": "⪸",
    "cong": "≅",
    "gtrless": "≷",
    "ngtr": "≯",
    "succcurlyeq": "≽",
    "curlyeqprec": "⋞",
    "gtrsim": "≳",
    "nleq": "≰",
    "succeq": "⪰",
    "curlyeqsucc": "⋟",
    "neq": "≠",
    "ne": "≠",
    "nequiv": "≢",
    "nleqq": "⌰",
    "succnapprox": "⪺",
    "doteq": "≐",
    "leq": "≤",
    "le": "≤",
    "nleqslant": "⌲",
    "succneqq": "⪶",
    "doteqdot": "≑",
    "Doteq": "≑",
    "leqq": "≦",
    "nless": "≮",
    "succnsim": "⋩",
    "leqslant": "⩽",
    "nprec": "⊀",
    "succsim": "≿",
    "eqsim": "≂",
    "lessapprox": "⪅",
    "npreceq": "⋠",
    "eqslantgtr": "⪖",
    "lesseqgtr": "⋚",
    "nsim": "≁",
    "eqslantless": "⪕",
    "lesseqqgtr": "⪋",
    "nsucc": "⊁",
    "triangleq": "≜",
    "eqcirc": "≖",
    "equiv": "≡",
    "lessgtr": "≶",
    "nsucceq": "⋡",
    "fallingdotseq": "≒",
    "lesssim": "≲",
    "prec": "≺",
    "geq": "≥",
    "ge": "≥",
    "ll": "≪",
    "precapprox": "⪷",
    "uparrow": "↑",
    "downarrow": "↓",
    "updownarrow": "↕",
    "Uparrow": "⇑",
    "Downarrow": "⇓",
    "Updownarrow": "⇕",
    "circlearrowleft": "↺",
    "circlearrowright": "↻",
    "curvearrowleft": "↶",
    "curvearrowright": "↷",
    "downdownarrows": "⇊",
    "downharpoonleft": "⇃",
    "downharpoonright": "⇂",
    "leftarrow": "←",
    "gets": "←",
    "Leftarrow": "⇐",
    "leftarrowtail": "↢",
    "leftharpoondown": "↽",
    "leftharpoonup": "↼",
    "leftleftarrows": "⇇",
    "leftrightarrow": "↔",
    "Leftrightarrow": "⇔",
    "leftrightarrows": "⇄",
    "leftrightharpoons": "⇋",
    "leftrightsquigarrow": "↭",
    "Lleftarrow": "⇚",
    "looparrowleft": "↫",
    "looparrowright": "↬",
    "multimap": "⊸",
    "nLeftarrow": "⇍",
    "nRightarrow": "⇏",
    "nLeftrightarrow": "⇎",
    "nearrow": "↗",
    "nleftarrow": "↚",
    "nleftrightarrow": "↮",
    "nrightarrow": "↛",
    "nwarrow": "↖",
    "rightarrow": "→",
    "to": "→",
    "Rightarrow": "⇒",
    "rightarrowtail": "↣",
    "rightharpoondown": "⇁",
    "rightharpoonup": "⇀",
    "rightleftarrows": "⇆",
    "rightleftharpoons": "⇌",
    "rightrightarrows": "⇉",
    "rightsquigarrow": "⇝",
    "Rrightarrow": "⇛",
    "searrow": "↘",
    "swarrow": "↙",
    "twoheadleftarrow": "↞",
    "twoheadrightarrow": "↠",
    "upharpoonleft": "↿",
    "upharpoonright": "↾",
    "restriction": "↾",
    "upuparrows": "⇈",
    "Lsh": "↰",
    "Rsh": "↱",
    "longleftarrow": "⟵",
    "longrightarrow": "⟶",
    "Longleftarrow": "⟸",
    "Longrightarrow": "⟹",
    "implies": "⟹",
    "longleftrightarrow": "⟷",
    "Longleftrightarrow": "⟺",
    "backepsilon": "∍",
    "because": "∵",
    "therefore": "∴",
    "between": "≬",
    "blacktriangleleft": "◀",
    "blacktriangleright": "▸",
    "dashv": "⊣",
    "bowtie": "⋈",
    "frown": "⌢",
    "in": "∈",
    "notin": "∉",
    "mid": "∣",
    "parallel": "∥",
    "models": "⊨",
    "ni": "∋",
    "owns": "∋",
    "nmid": "∤",
    "nparallel": "∦",
    "nshortmid": "⏒",
    "nshortparallel": "⏓",
    "nsubseteq": "⊈",
    "nsubseteqq": "⫇",
    "nsupseteq": "⊉",
    "nsupseteqq": "⫈",
    "ntriangleleft": "⋪",
    "ntrianglelefteq": "⋬",
    "ntriangleright": "⋫",
    "ntrianglerighteq": "⋭",
    "nvdash": "⊬",
    "nVdash": "⊮",
    "nvDash": "⊭",
    "nVDash": "⊯",
    "perp": "⊥",
    "pitchfork": "⋔",
    "propto": "∝",
    "shortmid": "⏐",
    "shortparallel": "⏑",
    "smile": "⌣",
    "sqsubset": "⊏",
    "sqsubseteq": "⊑",
    "sqsupset": "⊐",
    "sqsupseteq": "⊒",
    "subset": "⊂",
    "Subset": "⋐",
    "subseteq": "⊆",
    "subseteqq": "⫅",
    "subsetneq": "⊊",
    "subsetneqq": "⫋",
    "supset": "⊃",
    "Supset": "⋑",
    "supseteq": "⊇",
    "supseteqq": "⫆",
    "supsetneq": "⊋",
    "supsetneqq": "⫌",
    "trianglelefteq": "⊴",
    "trianglerighteq": "⊵",
    "varpropto": "⫉",
    "varsubsetneq": "⏔",
    "varsubsetneqq": "⏖",
    "varsupsetneq": "⏕",
    "varsupsetneqq": "⏗",
    "vdash": "⊢",
    "Vdash": "⊩",
    "vDash": "⊨",
    "Vvdash": "⊪",
    "backslash": "\\",
    "langle": "〈",
    "rangle": "〉",
    "lceil": "⌈",
    "rceil": "⌉",
    "lbrace": "{",
    "rbrace": "}",
    "gvertneqq": "⌯",
    "lvertneqq": "⌮",
    "lfloor": "⌊",
    "rfloor": "⌋",
    "cdots": "⋯",
    "ddots": "⋰",
    "vdots": "⋮",
    "dots": "…",
    "ldots": "…",
    "bot": "⊥",
    "angle": "∠",
    "backprime": "‵",
    "bigstar": "★",
    "blacklozenge": "◆",
    "blacksquare": "■",
    "blacktriangle": "▲",
    "blacktriangledown": "▼",
    "clubsuit": "♣",
    "diagdown": "⒁",
    "diagup": "⒂",
    "diamondsuit": "♢",
    "emptyset": "ø",
    "exists": "∃",
    "flat": "♭",
    "forall": "∀",
    "heartsuit": "♡",
    "infty": "∞",
    "lozenge": "◇",
    "measuredangle": "∡",
    "nabla": "∇",
    "natural": "♮",
    "neg": "¬",
    "lnot": "¬",
    "nexists": "∄",
    "prime": "′",
    "sharp": "♯",
    "spadesuit": "♠",
    "sphericalangle": "∢",
    "surd": "√",
    "top": "⊤",
    "varnothing": "∅",
    "triangle": "△",
    "triangledown": "▽"
}

var charMap = (function(charMap) {
    var retval = {};
    var lst = _.sortBy(_.keys(charMap), function(x) {
        return -x.length;
    });

    for (var ix in lst) {
        var key = lst[ix];
        if (charMap.hasOwnProperty(key))
            retval[key] = charMap[key];
    }
    return retval;
})(_charMap);

var rcharMap = (function(charMap) {
    var retval = {};
    for (var ix in charMap) {
        if (charMap.hasOwnProperty(ix))
            retval[charMap[ix]] = ix;
    }
    return retval;
})(_charMap);

function token2char(latex) {
    var _tex = latex;
    for (var ix in charMap) {
        if (charMap.hasOwnProperty(ix)) {
            var regExp = new RegExp('\\\\' + ix, 'g');
            _tex = _tex.replace(regExp, charMap[ix]);
        }
    }
    return _tex;
}

function char2token(latex) {
    var _tex = latex;
    try {
        for (var ix in rcharMap) {
            if (rcharMap.hasOwnProperty(ix) && _tex.match(new RegExp(ix))) {
                var regExp = new RegExp(ix, 'g');
                _tex = _tex.replace(regExp, ' \\' + rcharMap[ix] + ' ');
            }
        }
    } catch (err) {
        debugger;
    }
    _tex = _tex.replace(/\s+/g, ' ');
    return _tex;
}