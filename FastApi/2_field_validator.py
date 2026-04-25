"""
Patient Data Validation using Pydantic

Key Concepts:
- BaseModel: Used to define structured data with validation
- Type coercion: Automatically converts input types (e.g., '30' → 30)
- field_validator: Custom validation logic for fields
- EmailStr: Built-in email validation
- List, Dict: Complex data types supported

Validations Applied:
1. Email domain must be either 'hdfc.com' or 'icici.com'
2. Name is transformed to uppercase
3. Age must be between 0 and 100

Workflow:
- Input dictionary → Pydantic model → Validation + Transformation → Use in function
"""

from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import List, Dict


class Patient(BaseModel):
    """
    Patient Model

    Fields:
    - name: Patient's name (converted to uppercase)
    - email: Must be a valid email with allowed domains
    - age: Must be between 0 and 100
    - weight: Patient's weight (float)
    - married: Marital status (True/False)
    - allergies: List of allergies
    - contact_details: Dictionary storing contact info (e.g., phone)
    """

    name: str
    email: EmailStr
    age: int
    weight: float
    married: bool
    allergies: List[str]
    contact_details: Dict[str, str]

    # ---------------- EMAIL VALIDATION ----------------
    @field_validator('email')
    @classmethod
    def email_validator(cls, value):
        """
        Validates that the email domain is allowed.
        Allowed domains: hdfc.com, icici.com
        Example valid: abc@icici.com
        """
        valid_domains = ['hdfc.com', 'icici.com']

        # Extract domain from email
        domain_name = value.split('@')[-1]

        if domain_name not in valid_domains:
            raise ValueError('Not a valid domain')

        return value

    # ---------------- NAME TRANSFORMATION ----------------
    @field_validator('name')
    @classmethod
    def transform_name(cls, value):
        """
        Converts name to uppercase.
        Example: 'nitish' → 'NITISH'
        """
        return value.upper()

    # ---------------- AGE VALIDATION ----------------
    @field_validator('age', mode='after')
    @classmethod
    def validate_age(cls, value):
        """
        Ensures age is within a valid range (0 < age < 100)
        """
        if 0 < value < 100:
            return value
        else:
            raise ValueError('Age should be in between 0 and 100')


# ---------------- FUNCTION TO USE VALIDATED DATA ----------------
def update_patient_data(patient: Patient):
    """
    Takes a validated Patient object and prints details.
    Demonstrates how validated data is accessed.
    """
    print(patient.name)
    print(patient.age)
    print(patient.allergies)
    print(patient.married)
    print('updated')


# ---------------- INPUT DATA (RAW) ----------------
patient_info = {
    'name': 'nitish',
    'email': 'abc@icici.com',
    'age': '30',  # string → automatically converted to int
    'weight': 75.2,
    'married': True,
    'allergies': ['pollen', 'dust'],
    'contact_details': {'phone': '2353462'}
}

# ---------------- MODEL CREATION ----------------
# Validation + type coercion happens here
patient1 = Patient(**patient_info)

# ---------------- FUNCTION CALL ----------------
update_patient_data(patient1)