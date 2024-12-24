import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

interface BonusRequest {
  _id: string;
  title: string;
  reason: string;
  amount: number;
  status: string;
  submissionDate: string;
  processedDate?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
  imports: [CurrencyPipe, CommonModule],
  standalone: true
})
export class DashboardComponent implements OnInit {
  bonusRequests: BonusRequest[] = [];
  totalBonuses: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    const url = 'https://finance-system.koyeb.app/api/bonus/monthly?month=12&year=2024';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    this.http.get<BonusRequest[]>(url,{ headers }).subscribe(
      (data) => {
        // Filter out pending requests
        this.bonusRequests = data.filter(request => request.status !== 'pending');
        
        // Calculate total from approved requests only
        this.totalBonuses = this.bonusRequests
          .filter(request => request.status === 'approved')
          .reduce((sum, request) => sum + request.amount, 0);
      },
      (error) => {
        console.error('Error fetching bonus requests:', error);
      }
    );
  }

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      approved: 'badge bg-success',
      rejected: 'badge bg-danger'
    };
    return statusMap[status.toLowerCase()] || 'badge bg-secondary';
  }
}