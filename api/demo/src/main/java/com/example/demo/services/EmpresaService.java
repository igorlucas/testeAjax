package com.example.demo.services;

import java.util.List;

import com.example.demo.domain.Empresa;

public interface EmpresaService {

	Empresa create(Empresa empresa);
	
	Empresa read(String id);

	List<Empresa> read();

	void update(String id, Empresa empresa);

	void delete(String id);
}
