package com.beschtee.tradingservice.Models.person;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "employee")
@Data
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper=true)
public class Employee extends User {

}
