package com.beschtee.backend.Models.person;

import com.beschtee.backend.Models.Depot;
import lombok.Data;

@Data
public class Employee extends User {
    public Depot depot;
}
