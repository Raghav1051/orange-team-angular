package com.physician.restapi.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.physician.restapi.configuration.PhysicianSpringMvcRestApiConfiguration;

/**
 *
 * @author RoopaP
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = PhysicianSpringMvcRestApiConfiguration.class)
@WebAppConfiguration
public class PhysicianControllerTest {

	@Autowired
    private WebApplicationContext webApplicationContext;
    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
    }

    @Test
    public void getAccount() throws Exception {
        this.mockMvc.perform(get("/physicians/").param("fname", "M"))
        .andExpect(status().isOk());
            /*.andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$.name").value("Lee"));*/
    }
}
