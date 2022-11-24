package com.beschtee.tradingservice.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@Controller
public class TemplateController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/main")
    public String goToMainPage() {
        return "Main";
    }

    @GetMapping("/**")
    public String redirectToMain() {
        return "redirect:/main";
    }

}
