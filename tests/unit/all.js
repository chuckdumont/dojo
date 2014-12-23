define([
	'./AdapterRegistry',
	'./Deferred',
	'./Evented',
	'./Stateful',
	'./_base',
	'./aspect',
	'./cache',
	'./cldr/monetary',
	'./cldr/supplemental',
	'./colors',
	'./currency',
	'./date',
	'./date/locale',
	'./date/stamp',
	'./debounce',
	'./errors',
	'./fx/easing',
	'./i18n',
	'./io-query',
	'./json',
	'./keys',
	'./loadInit',
	'./number',
	'./on',
	'./on/debounce',
	'./on/throttle',
	'./promise',
	'./regexp',
	'./request',
	'./store',
	'./string',
	'./text',
	'./throttle',
	'./topic',
	'./when',

	// host-specific tests
	'dojo/has!host-browser?./NodeList-html',
	'dojo/has!host-browser?./NodeList-manipulate',
	'dojo/has!host-browser?./NodeList-traverse',
	'dojo/has!host-browser?./back',
	'dojo/has!host-browser?./dom-attr',
	'dojo/has!host-browser?./dom-construct',
	'dojo/has!host-browser?./dom-form',
	'dojo/has!host-browser?./dom-prop',
	'dojo/has!host-browser?./dom-style',
	'dojo/has!host-browser?./hash',
	'dojo/has!host-browser?./html',
	'dojo/has!host-browser?./io/iframe',
	'dojo/has!host-browser?./mouse',
	'dojo/has!host-browser?./parser',
	'dojo/has!host-browser?./query',
	'dojo/has!host-browser?./require/require',
	'dojo/has!host-browser?./router',
	'dojo/has!host-browser?./rpc',
	'dojo/has!host-node?./node'
], function () {});
