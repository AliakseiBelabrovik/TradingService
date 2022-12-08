package com.beschtee.tradingservice.Models.person;

import com.beschtee.tradingservice.Models.Depot;
import lombok.Data;

@Data
public class Employee extends User {
    public Depot depot;
}
