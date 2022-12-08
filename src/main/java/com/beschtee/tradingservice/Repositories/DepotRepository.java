package com.beschtee.tradingservice.Repositories;

import com.beschtee.tradingservice.Models.Depot;
import com.beschtee.tradingservice.Models.person.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface DepotRepository extends JpaRepository<Depot, Long> {

    Optional<Depot> findDepotByCustomer(Customer customer);


}
