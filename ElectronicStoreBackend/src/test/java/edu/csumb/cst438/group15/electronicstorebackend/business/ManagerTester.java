package edu.csumb.cst438.group15.electronicstorebackend.business;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.assertj.core.util.Arrays;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import edu.csumb.cst438.group15.electronicstorebackend.api.entities.Checkout;
import edu.csumb.cst438.group15.electronicstorebackend.api.entities.Electronics;
import edu.csumb.cst438.group15.electronicstorebackend.api.entities.ProductInfo;
import edu.csumb.cst438.group15.electronicstorebackend.api.entities.Products;
import edu.csumb.cst438.group15.electronicstorebackend.api.entities.Users;
import edu.csumb.cst438.group15.electronicstorebackend.data.ElectronicsDbClient;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ManagerTester {
    @Autowired
    Manager manager;

    @MockBean
    ElectronicsDbClient electronicsDbClient;

    @Rule
    public ExpectedException expectedException = ExpectedException.none();

    @Test
    public void getElectronicListReturnsEmptyListWhenNullElectronicsInDb() {
        when(electronicsDbClient.getElectronicsData()).thenReturn(null);
        Assert.assertEquals(null, manager.getElectronicsList());
    }

    @Test
    public void getElectronicsListReturnsExpectedResults() {
        when(electronicsDbClient.getElectronicsData()).thenReturn(FiveStandardElectronicsStub());
        List<Electronics> expectedElectronics = FiveStandardElectronicsStub();
        List<Electronics> actualElectronics = manager.getElectronicsList();

        Assert.assertTrue(expectedElectronics.get(1).getProducts().getProductName().equals(
            actualElectronics.get(1).getProducts().getProductName()));
    }

    @Test
    public void getElectronicListPerolatesExceptionWhenThrownAtLowerLever () {
        when(electronicsDbClient.getElectronicsData()).thenThrow(new RuntimeException("Test"));
        expectedException.expect(RuntimeException.class);
        manager.getElectronicsList();
    }

    private List<Electronics> FiveStandardElectronicsStub () {
        List<Electronics> result = new ArrayList<Electronics>();
        Electronics e1 = new Electronics(new Products(1, "MacBook"), new ProductInfo(1), new Users(1), new Checkout(1));
        Electronics e2 = new Electronics(new Products(2, "iPhone"), new ProductInfo(2), new Users(2), new Checkout(2));
        Electronics e3 = new Electronics(new Products(3, "Ear Pods"), new ProductInfo(3), new Users(3), new Checkout(3));
        result = Arrays.asList(e1, e2, e3);
        return result;
    }

    //what to test? Answer from class:
}