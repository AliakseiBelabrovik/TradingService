package com.beschtee.backend.Models;

public class Stock {
    public Long id;
    public String stockId;

    //one to one relationship???
    public Depot depot;
    public double number;
    public String firmName;


}
