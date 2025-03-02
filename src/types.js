const KeyTypes = {
	pk: "pk",
	sk: "sk",
};

const BatchWriteTypes = {
	batch: "batch",
	concurrent: "concurrent"
}

const QueryTypes = {
	and: "and",
	gte: "gte",
	gt: "gt",
	lte: "lte",
	lt: "lt",
	eq: "eq",
	begins: "begins",
	between: "between",
	collection: "collection",
	is: "is"
};

const MethodTypes = {
	put: "put",
	get: "get",
	query: "query",
	scan: "scan",
	update: "update",
	delete: "delete",
	remove: "remove",
	scan: "scan",
	patch: "patch",
	create: "create",
	batchGet: "batchGet",
	batchWrite: "batchWrite"
};

const Comparisons = {
	gte: ">=",
	gt: ">",
	lte: "<=",
	lt: "<",
};

const CastTypes = ["string", "number"];

const AttributeTypes = {
	string: "string",
	number: "number",
	boolean: "boolean",
	enum: "enum",
	map: "map",
	set: "set",
	list: "list",
	any: "any",
};

const PathTypes = {
	...AttributeTypes,
	item: "item"
};


const ExpressionTypes = {
	ConditionExpression: "ConditionExpression",
	FilterExpression: "FilterExpression"
};

const ElectroInstance = {
	entity: Symbol("entity"),
	service: Symbol("service"),
	electro: Symbol("electro"),
};

const ElectroInstanceTypes = {
	electro: "electro",
	service: "service",
	entity: "entity",
	model: "model"
};

const ModelVersions = {
	beta: "beta",
	v1: "v1",
	v2: "v2"
};

const EntityVersions = {
	v1: "v1"
};

const ServiceVersions = {
	v1: "v1"
};

const MaxBatchItems = {
	[MethodTypes.batchGet]: 100,
	[MethodTypes.batchWrite]: 25
};

const AttributeMutationMethods = {
	get: "get",
	set: "set"
};

const Pager = {
	raw: "raw",
	named: "named",
	item: "item"
}

const UnprocessedTypes = {
	raw: "raw",
	item: "item"
};

const AttributeWildCard = "*";

const ItemOperations = {
	"set": "set",
	"delete": "delete",
	"remove": "remove",
	"add": "add",
	"subtract": "subtract",
	"append": "append",
};

const AttributeProxySymbol = Symbol("attribute_proxy");

const BuilderTypes = {
	update: "update",
	filter: "filter"
};

const ValueTypes = {
	string: "string",
	boolean: "boolean",
	number: "number",
	array: "array",
	set: "set",
	aws_set: "aws_set",
	object: "object",
	map: "map",
	null: "null",
	undefined: "undefined",
	unknown: "unknown",
};

const TraverserIndexes = {
	readonly: "readonly",
	required: "required",
	getters: "getters",
	setters: "setters"
}

const ReturnValues = {
	'default': 'default',
	'none': 'none',
	'all_old': 'all_old',
	'updated_old': 'updated_old',
	'all_new': 'all_new',
	'updated_new': 'updated_new',
};

const FormatToReturnValues = {
	'none': 'NONE',
	'default': 'NONE',
	'all_old': 'ALL_OLD',
	'updated_old': 'UPDATED_OLD',
	'all_new': 'ALL_NEW',
	'updated_new': 'UPDATED_NEW'
};

const TableIndex = "";

const KeyCasing = {
	none: "none",
	upper: "upper",
	lower: "lower",
	default: "default",
};

const EventSubscriptionTypes = [
	"query",
	"results"
];

const TerminalOperation = {
	go: 'go',
	page: 'page',
}

module.exports = {
	Pager,
	KeyTypes,
	CastTypes,
	KeyCasing,
	PathTypes,
	QueryTypes,
	ValueTypes,
	TableIndex,
	MethodTypes,
	Comparisons,
	BuilderTypes,
	ReturnValues,
	MaxBatchItems,
	ModelVersions,
	ItemOperations,
	AttributeTypes,
	EntityVersions,
	ServiceVersions,
	ExpressionTypes,
	ElectroInstance,
	TraverserIndexes,
	UnprocessedTypes,
	AttributeWildCard,
	TerminalOperation,
	FormatToReturnValues,
	AttributeProxySymbol,
	ElectroInstanceTypes,
	EventSubscriptionTypes,
	AttributeMutationMethods
};
