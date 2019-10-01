package com.example.demo.dtos;

import java.text.SimpleDateFormat;
import java.util.HashSet;
import java.util.Set;

import com.example.demo.domain.Empresa;
import com.example.demo.domain.Fornecedor;

public class FornecedorDTO {

	private String id;

	private Empresa empresa;

	private String nome;

	private Integer tipo;

	private String cpfOuCnpj;

	private String rg;

	private String dtNascimento;

	private String dtCadastro;

	private Set<String> telefones = new HashSet<>();

	public FornecedorDTO(Fornecedor obj) {
		this.id = obj.getId();
		this.empresa = obj.getEmpresa();
		this.nome = obj.getNome();
		this.tipo = obj.getTipo();
		this.cpfOuCnpj = obj.getCpfOuCnpj();
		this.rg = obj.getRg();

		SimpleDateFormat formatador = new SimpleDateFormat("dd/MM/yyyy");
		String dfDn = formatador.format(obj.getDtNascimento());
		String dfDc = formatador.format(obj.getDtCadastro());
		this.dtNascimento = dfDn;
		this.dtCadastro = dfDc;
		this.telefones = obj.getTelefones();
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

	public String getDtNascimento() {
		return dtNascimento;
	}

	public void setDtNascimento(String dtNascimento) {
		this.dtNascimento = dtNascimento;
	}

	public String getDtCadastro() {
		return dtCadastro;
	}

	public void setDtCadastro(String dtCadastro) {
		this.dtCadastro = dtCadastro;
	}

	public Set<String> getTelefones() {
		return telefones;
	}

	public void setTelefones(Set<String> telefones) {
		this.telefones = telefones;
	}

}
