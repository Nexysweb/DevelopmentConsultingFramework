const columns = [
	{
		"label": "field1",
		"name": "field1",
		"fieldType":"text",
		"uiType": "text", (checkbox and toggle) // by default take `componentType`,
		"isSort"
		"sorter": (s1, s2) => s1.field1 > s2.field1,  // by default take sorting associated with type, see products list,
		"filters": 'array of value',
		"filteredValue": '',
		"onFilter": (value, record) => true/false,
		"isEdit": true/false
	},
	{"label": "field2", "name": "field2", "optional": false, "componentType":"text"}
]

search: {
	props: ['lastName', 'firstName']
	minLength: 3
}

const config = {
	isView: true,
	isEdit : true,
	isDelete: false,
	isMove: true
	search,
  "status": {"default": 1, "values": ["sent", "paid", ..]}
}

const table = {
  "columns": columns,
  "config": config,
}