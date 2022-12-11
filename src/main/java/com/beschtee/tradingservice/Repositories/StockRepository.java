package com.beschtee.tradingservice.Repositories;

import com.beschtee.tradingservice.Models.Depot;
import com.beschtee.tradingservice.Models.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {

    ArrayList<Stock> findAllByDepot(Depot depot);

}
