namespace LemonadeBE;
public class OrdersBLL
{
        public static Order CreateOrder(Order newOrder)
    {
        var wipOrder = new Order
        {
            CustomerName = newOrder.CustomerName,
            CustomerContact = newOrder.CustomerContact,
            ContactType = newOrder.ContactType
        };

        if (newOrder.Products.Count() != 0)
        {
            foreach (var product in newOrder.Products)
            {
                wipOrder.Products.Add(product);
            }
        }
        return wipOrder;
    }
}