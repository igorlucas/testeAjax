package com.example.demo.domain;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "empresas")
public class Empresa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private String id;
	
	@NotNull()
	private String nome;
	
	@NotNull()
	private String cep;
	
	@NotNull()
	private String cnpj;
	
	@NotNull()
	private String uf;
	
	@NotNull()
	private String localidade;
	
	@NotNull()
	private String logradouro;
	
	public Empresa() {
	
	}

	public Empresa(String id, String nome, String cep, String cnpj, String uf, String localidade, String logradouro) {
		super();
		this.id = id;
		this.nome = nome;
		this.cep = cep;
		this.cnpj = cnpj;
		this.uf = uf;
		this.localidade = localidade;
		this.logradouro = logradouro;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	
	

}
