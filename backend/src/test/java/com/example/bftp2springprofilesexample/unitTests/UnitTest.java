package com.example.bftp2springprofilesexample.unitTests;
import static com.example.bftp2springprofilesexample.models.Role.RoleName.*;
import static org.hamcrest.MatcherAssert.assertThat;

import com.example.bftp2springprofilesexample.models.Role;
import com.example.bftp2springprofilesexample.models.Stock;
import com.example.bftp2springprofilesexample.models.User;
import com.example.bftp2springprofilesexample.repositories.RoleRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.Matchers.*;
public class UnitTest {

    @Test
    void stockHasACategory () {
        Stock stock = new Stock(1L, "Prendas01", "Abrigos", "prendas", 1, 0, 0);

        assertThat(stock.getCategory(), equalTo("prendas"));
    }

    @Test
    void stockHasAnId () {
        Stock stock = new Stock(1L, "Prendas01", "Abrigos", "prendas", 1, 0, 0);

        assertThat(stock.getId(), equalTo(1L));
    }

    @Test
    void stockHasAQuantity () {
        Stock stock = new Stock(1L, "Prendas01", "Abrigos", "prendas", 1, 0, 0);

        assertThat(stock.getCantidad(), equalTo(1));
    }

    @Test
    void stockHasADescription () {
        Stock stock = new Stock(1L, "Prendas01", "Abrigos", "prendas", 1, 0, 0);

        assertThat(stock.getDescripcion(), equalTo("Abrigos"));
    }

    @Test
    void stockCanAddQuantities () {
        Stock stock = new Stock(1L, "Prendas01", "Abrigos", "prendas", 40, 1, 0);

        assertThat(stock.getCantidad() + stock.getAdd(), equalTo(41));
    }

    @Test
    void stockCanSubtractQuantities () {
        Stock stock = new Stock(1L, "Prendas01", "Abrigos", "prendas", 40, 0, 10);

        assertThat(stock.getCantidad() - stock.getSubtract(), equalTo(30));
    }

    @Test
    void userHasAnUsernameAnEmailAndAPassword () {
        User user = new User("admin", "admin@example.com", "123456");

        assertThat(user.getUsername(), equalTo("admin"));
        assertThat(user.getEmail(), equalTo("admin@example.com"));
        assertThat(user.getPassword(), equalTo("123456"));
    }

    @Test
    void roleHasAName() {
        Role role = new Role(ROLE_USER);

        assertThat(role.getName(), equalTo(ROLE_USER));
    }




}
