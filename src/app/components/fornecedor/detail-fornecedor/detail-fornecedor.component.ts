import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Fornecedor } from 'src/app/models/fornecedor';

@Component({
  selector: 'app-detail-fornecedor',
  templateUrl: './detail-fornecedor.component.html',
  styleUrls: ['./detail-fornecedor.component.scss']
})
export class DetailFornecedorComponent implements OnInit {

  fornecedor: Fornecedor;
  constructor(private route: ActivatedRoute,
    private router: Router, private fornecedorService: FornecedorService) {
    this.fornecedor = new Fornecedor();
  }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        const { id } = params;
        if (id) {
          this.loadFornecedor(id);
        }

      });
  }

  loadFornecedor(id) {
    this.fornecedorService.getById(id).subscribe(res => {
      this.fornecedor = res;
      console.log(res);
    });
  }

}
