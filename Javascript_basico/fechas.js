const fecha = new Date();

const fecha_nacimiento = new Date(1992, 11, 30);

const compara_fecha = fecha > fecha_nacimiento;

const dia_nacimiento = fecha_nacimiento.getDate();

const mes_nacimiento = fecha_nacimiento.getMonth() + 1;

const año_nacimiento = fecha_nacimiento.getFullYear();
