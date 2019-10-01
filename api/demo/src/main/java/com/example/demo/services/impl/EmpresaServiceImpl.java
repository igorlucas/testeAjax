package com.example.demo.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Empresa;
import com.example.demo.exceptions.ObjectNotFoundException;
import com.example.demo.repositories.EmpresaRepository;
import com.example.demo.services.EmpresaService;

@Service
public class EmpresaServiceImpl implements EmpresaService {

	@Autowired
	private EmpresaRepository empresaRepository;

	@Override
	public Empresa create(Empresa empresa) {
		return empresaRepository.save(empresa);
	}

	@Override
	public Empresa read(String id) {
		Optional<Empresa> empresa = empresaRepository.findById(id);
		return empresa.orElseThrow(() -> new ObjectNotFoundException(
				"Empresa não encontrado! Id: " + id + ", Tipo: " + Empresa.class.getName())); 
	}

	@Override
	public List<Empresa> read() {
		return empresaRepository.findAll();
	}

	@Override
	public void update(String id, Empresa empresa) {
		empresaRepository.save(empresa);
	}

	@Override
	public void delete(String id) {
		empresaRepository.deleteById(id);
	}

}
