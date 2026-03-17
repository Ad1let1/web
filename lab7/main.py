from models import Product, PhysicalProduct, DigitalProduct

def main():
    generic_item = Product("Basic Box", 5.0, "BOX-01")
    laptop = PhysicalProduct("Gaming Laptop", 1200.0, "LAP-99", 2.5)
    software = DigitalProduct("Photo Editor Pro", 60.0, "SFT-12", True)

    catalog = [generic_item, laptop, software]

    for item in catalog:
        print(item)
        print(item.display_info())
        print("------------")
        print(item.activate()) 
        print(item) 
        print(item.display_info())
        print("-------------------------------------------------------------")

    print(laptop.pack_item())
    print(software.download())

if __name__ == "__main__":
    main()