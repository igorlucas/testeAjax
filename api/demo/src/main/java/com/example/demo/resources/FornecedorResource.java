package com.example.demo.resources;

import java.net.URI;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.domain.Fornecedor;
import com.example.demo.dtos.FornecedorDTO;
import com.example.demo.services.FornecedorService;

@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorResource {

	@Autowired
	private FornecedorService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<FornecedorDTO> findById(@PathVariable String id) {
		Fornecedor obj = service.read(id);
		return ResponseEntity.ok().body(new FornecedorDTO(obj));
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Fornecedor obj) {
		obj = service.create(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> update(@Valid @RequestBody Fornecedor obj, @PathVariable String id) {
		service.update(id, obj);
		return ResponseEntity.noContent().build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable String id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Fornecedor>> findAll() {
		List<Fornecedor> list = service.read();
		return ResponseEntity.ok().body(list);
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public ResponseEntity<List<Fornecedor>> search(
			@RequestParam("empresa") String empresa 
			//@RequestParam("nome") String nome, @RequestParam("cpfOuCnpj") String cpfOuCnpj, 
			//@RequestParam("dtCadastro") Date dtCadastro
			) {
		List<Fornecedor> list = service.search(empresa, "", "", new Date());
		return ResponseEntity.ok().body(list);
	}
}