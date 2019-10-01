package com.example.demo.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.demo.services.validations.ValidarFornecedor;
import com.fasterxml.jackson.annotation.JsonFormat;

@ValidarFornecedor
@Document(collection = "fornecedores")
public class Fornecedor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	// @NotNull()
	private Empresa empresa;

	// @NotNull()
	private String nome;

	// @NotNull()
	private Integer tipo;

	// @NotNull()
	private String cpfOuCnpj;

	private String rg;

	private Date dtNascimento;

	// @NotNull()
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private Date dtCadastro;

	private Set<String> telefones = new HashSet<>();
	
	
	public Fornecedor() {
	
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getTipo() {
		return tipo;
	}

	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}

	public String getCpfOuCnpj() {
		return cpfOuCnpj;
	}

	public void setCpfOuCnpj(String cpfOuCnpj) {
		this.cpfOuCnpj = cpfOuCnpj;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Date getDtNascimento() {
		return dtNascimento;
	}

	public void setDtNascimento(Date dtNascimento) {
		this.dtNascimento = dtNascimento;
	}

	public Date getDtCadastro() {
		return dtCadastro;
	}

	public void setDtCadastro(Date dtCadastro) {
		this.dtCadastro = dtCadastro;
	}

	public Set<String> getTelefones() {
		return telefones;
	}

	public void setTelefones(Set<String> telefones) {
		this.telefones = telefones;
	}

}
