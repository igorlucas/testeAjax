package com.example.demo.services;

import java.util.Date;
import java.util.List;

import com.example.demo.domain.Fornecedor;

public interface FornecedorService {

	Fornecedor create(Fornecedor fornecedor);

	Fornecedor read(String id);

	List<Fornecedor> read();
	
	List<Fornecedor> search(String empresa, String nome, String cpfOuCnpj, Date dtCadastro);

	void update(String id, Fornecedor fornecedor);

	void delete(String id);

}
