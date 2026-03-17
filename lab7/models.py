class Product:
    def __init__(self, name, price, sku):
        self.name = name
        self.price = price
        self.sku = sku
        self.is_active = False

    def activate(self):
        self.is_active = True
        return f"The product {self.name} ({self.sku}) is now active for sale."

    def deactivate(self):
        self.is_active = False
        return f"The product {self.name} ({self.sku}) is hidden from the catalog."

    def display_info(self):
        return f"Generic Product Info: {self.name} | ${self.price} | SKU: {self.sku}"

    def __str__(self):
        status = "active" if self.is_active else "inactive"
        return f"[{self.name} = ${self.price}  Status: {status}]"


class PhysicalProduct(Product):
    def __init__(self, name, price, sku, weight_kg):
        super().__init__(name, price, sku)
        self.weight_kg = weight_kg

    def display_info(self):
        return f"Physical Product Info: {self.name} | ${self.price} | Weight: {self.weight_kg}kg."

    def pack_item(self):
        return f"The item {self.name} is being packed into a box."


class DigitalProduct(Product):
    def __init__(self, name, price, sku, requires_license):
        super().__init__(name, price, sku)
        self.requires_license = requires_license

    def display_info(self):
        license_status = "requires a license key" if self.requires_license else "is DRM-free"
        return f"Digital Product Info: {self.name} | ${self.price} | {license_status}."

    def download(self):
        if self.requires_license:
            return f"Cannot download {self.name} directly. Please verify your license key first."
        return f"The file for {self.name} is now downloading!"