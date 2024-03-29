'use strict';

const types = {
	INTEGER: 'INTEGER',
	STRING: 'STRING',
	TEXT: 'TEXT',
	BLOBlong: `BLOBlong`,
};

const names = {
	email: 'email',
	password: 'password',
	firstname: 'firstname',
	lastname: 'lastname',
	gender: 'gender',
	address: 'address',
	phoneNumber: 'phoneNumber',
	avatar: 'avatar',
	roleId: 'roleId',
	positionId: 'positionId',
	resetPasswordToken: 'resetPasswordToken',
	deleted: 'deleted',
};

const tableInfo = {
	tableName: 'users',
	cols: [
		`${names.email}-${types.STRING}`,
		`${names.password}-${types.STRING}`,
		`${names.firstname}-${types.STRING}`,
		`${names.lastname}-${types.STRING}`,
		`${names.gender}-${types.STRING}`,
		`${names.address}-${types.STRING}`,
		`${names.phoneNumber}-${types.STRING}`,
		`${names.avatar}-${types.BLOBlong}`,
		`${names.roleId}-${types.STRING}`,
		`${names.positionId}-${types.STRING}`,
		`${names.resetPasswordToken}-${types.TEXT}`,
		`${names.deleted}-${types.INTEGER}`,
	],
};

const handleColTypes = (dbType, isSequelize = true) => {
	let result = {};
	if (isSequelize) {
		tableInfo.cols.forEach((element) => {
			const [key, type] = element.split('-');
			if (type === types.STRING) {
				result[key] = { type: dbType.STRING };
			} else if (type === types.INTEGER) {
				result[key] = { type: dbType.INTEGER };
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
