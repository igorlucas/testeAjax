package com.example.demo.services.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Fornecedor;
import com.example.demo.exceptions.ObjectNotFoundException;
import com.example.demo.repositories.FornecedorRepository;
import com.example.demo.services.FornecedorService;

@Service
public class FornecedorServiceImpl implements FornecedorService {

	@Autowired
	private FornecedorRepository fornecedorRepository;

	@Override
	public Fornecedor create(Fornecedor fornecedor) {
		fornecedor.setDtCadastro(new Date());
		return fornecedorRepository.save(fornecedor);
	}

	@Override
	public Fornecedor read(String id) {
		Optional<Fornecedor> fornecedor = fornecedorRepository.findById(id);
		return fornecedor.orElseThrow(() -> new ObjectNotFoundException(
				"Fornecedor não encontrado! Id: " + id + ", Tipo: " + Fornecedor.class.getName()));
	}

	@Override
	public List<Fornecedor> read() {
		List<Fornecedor> fornecedor = fornecedorRepository.findAll();
		return fornecedor;
	}

	@Override
	public void update(String id, Fornecedor fornecedor) {
		fornecedorRepository.save(fornecedor);
	}

	@Override
	public void delete(String id) {
		fornecedorRepository.deleteById(id);
	}

	@Override
	public List<Fornecedor> search(String empresa, String nome, String cpfOuCnpj, Date dtCadastro) {
		List<Fornecedor> list = fornecedorRepository.fullSearch(empresa);
		return list;
	}

}
