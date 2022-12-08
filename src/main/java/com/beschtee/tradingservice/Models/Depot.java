package com.beschtee.tradingservice.Models;


import jakarta.persistence.*;

@Entity
@Table( name="depot" )
public class Depot {
    @Id
    @SequenceGenerator(
            name = "depot_id",
            sequenceName = "depot_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "depot_id_seq"
    )
    @Column(name="id", updatable = false)
    public Long id;
}
