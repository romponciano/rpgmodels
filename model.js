function throwIllegalTypeError(tipoCorreto) {
	throw 'Campo ', tipoCorreto, ' deve ser um ', tipoCorreto, ' existente';
}

class Jogador {
	constructor(id, nome, login, senha) {
		this.id = id;
		this.nome = nome;
		this.login = login;
		this.senha = senha;
	}
}

class Vantagem {
	constructor(id, nome, descricao, custo) {
		this.id = id;
		this.descricao = descricao;
		this.custo = custo;
		this.nome = nome;
	}
}

class Desvantagem {
	constructor(id, nome, descricao, custo) {
		this.id = id;
		this.descricao = descricao;
		this.custo = custo;
		this.nome = nome;
	}
}

class Jutsu {
	constructor(id, nome, descricao, custo) {
		this.id = id;
		this.descricao = descricao;
		this.custo = custo;
		this.nome = nome;
	}
}

class Cla {
	constructor(id, nome, descricao, custo) {
		this.id = id,
			this.nome = nome;
		this.descricao = descricao;
		this.custo = custo;
		this.jutsus = [];
	}
}

class Classe {
	constructor(id, nome, descricao) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
	}
}

class Ficha {
	constructor(id, jogador, nomePersonagem, cla, classe) {
		if  (!(jogador instanceof Jogador)) {
			throwIllegalTypeError('Jogador');
		} else if (!(cla instanceof Cla)) {
			throwIllegalTypeError('Clã');
		} else if (!(classe instanceof Classe)) {
			throwIllegalTypeError('Classe');
		}
		this.id = id;
		this.jogador = jogador;
		this.nomePersonagem = nomePersonagem;
		this.cla = cla;
		this.classe = classe;
		this.level = 1;
		this.nivel = '';
		this.forca = 0;
		this.destreza = 0;
		this.resistencia = 0;
		this.inteligencia = 0;
		this.ninjutsu = 0;
		this.taijutsu = 0;
		this.genjutsu = 0;
		this.ichizoku = 0;
		this.bukijutsu = 0;
		this.kuchiyose = 0;
		this.igakujutsu = 0;
		this.fuuinjutsu = 0;
		this.agua = 0;
		this.vento = 0;
		this.terra = 0;
		this.fogo = 0;
		this.trovao = 0;
		this.missaSS = 0;
		this.missaoS = 0;
		this.missaoA = 0;
		this.missaoB = 0;
		this.missaoC = 0;
		this.missaoD = 0;
		this.vantagens = [];
		this.desvantagens = [];
		this.jutsus = [];
	}
}

module.exports = {
	Jogador,
	Vantagem,
	Desvantagem,
	Jutsu,
	Cla,
	Classe,
	Ficha
}