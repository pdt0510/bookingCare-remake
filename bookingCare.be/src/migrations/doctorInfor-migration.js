'use strict';
const types = {
	STRING: 'STRING',
	BOOLEAN: 'BOOLEAN',
	INTEGER: 'INTEGER',
	DATE: 'DATE',
	TEXT: 'TEXT',
	TEXTLONG: 'TEXTLONG',
};

const tableInfo = {
	tableName: 'doctor_infors',
	cols: [
		`doctorId-${types.INTEGER}`,
		`specialityId-${types.INTEGER}`,
		`clinicId-${types.INTEGER}`,
		`priceId-${types.STRING}`,
		`provinceId-${types.STRING}`,
		`paymentId-${types.STRING}`,
		`clinicAddress-${types.STRING}`,
		`clinicName-${types.STRING}`,
		`note-${types.TEXT}`,
		`count-${types.INTEGER}`,
		`deleted-${types.INTEGER}`, // src33xx2
	],
};

const handleColTypes = (dbType, isSequelize = true) => {
	let result = {};
	if (isSequelize) {
		tableInfo.cols.forEach((element) => {
			const [key, type] = element.split('-');
			if (type === types.STRING) {
				if (
					key === 'priceId' ||
					key === 'provinceId' ||
					key === 'paymentId' ||
					key === 'clinicAddress' ||
					key === 'clinicName'
				) {
					result[key] = {
						type: dbType.STRING,
						allowNull: false,
						defaultValue: 'No content',
					};
				} else {
					result[key] = { type: dbType.STRING };
				}
			} else if (type === types.INTEGER) {
				if (key === 'doctorId' || key === 'specialityId' || key === 'clinicId') {
					result[key] = {
						type: dbType.INTEGER,
						allowNull: false,
						defaultValue: dbType.INTEGER,
					};
				} else if (key === 'count') {
					result[key] = {
						type: dbType.INTEGER,
						allowNull: false,
						defaultValue: 0,
					};
				} else {
					result[key] = { type: dbType.INTEGER };
				}
			} else if (type === types.BIGINT) {
				result[key] = { type: dbType.BIGINT };
			} else if (type === types.BOOLEAN) {
				result[key] = { type: dbType.BOOLEAN };
			} else if (type === types.DATE) {
				result[key] = { type: dbType.DATE };
			} else if (type === types.TEXT) {
				result[key] = { type: dbType.TEXT };
			} else if (type === types.TEXTLONG) {
				result[key] = { type: dbType.TEXT('long') };
			} else if (type === types.BLOBmedium) {
				result[key] = { type: dbType.BLOB('medium') };
			} else if (type === types.BLOBlong) {
				result[key] = { type: dbType.BLOB('long') };
			}
		});
	} else {
		tableInfo.cols.forEach((element) => {
			const [key, type] = element.split('-');
			if (type === types.STRING) {
				result[key] = dbType.STRING;
			} else if (type === types.INTEGER) {
				result[key] = dbType.INTEGER;
			} else if (type === types.BIGINT) {
				result[key] = dbType.BIGINT;
			} else if (type === types.BOOLEAN) {
				result[key] = dbType.BOOLEAN;
			} else if (type === types.DATE) {
				result[key] = dbType.DATE;
			} else if (type === types.TEXT) {
				result[key] = dbType.TEXT;
			} else if (type === types.TEXTLONG) {
				result[key] = dbType.TEXT('long');
			} else if (type === types.BLOBmedium) {
				result[key] = dbType.BLOB('medium');
			} else if (type === types.BLOBlong) {
				result[key] = dbType.BLOB('long');
			}
		});
	}
	return result;
};

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(tableInfo.tableName, {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			...handleColTypes(Sequelize),
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(tableInfo.tableName);
	},
	tableInfo,
	handleColTypes,
};
