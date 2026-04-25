# Importing required classes and types
from pydantic import BaseModel, EmailStr, AnyUrl, Field
from typing import List, Dict, Optional, Annotated

# -------------------------------
# Defining a Pydantic Model
# -------------------------------
# A Pydantic model is used to:
# 1. Validate incoming data
# 2. Enforce types
# 3. Provide constraints easily

class Patient(BaseModel):

    # Annotated is used to attach metadata (Field) to the type
    # max_length ensures name cannot exceed 50 characters
    # title/description/examples are useful for documentation (e.g., FastAPI)
    name: Annotated[
        str,
        Field(
            max_length=50,
            title='Name of the patient',
            description='Give the name of the patient in less than 50 chars',
            examples=['Nitish', 'Amit']
        )
    ]

    # EmailStr ensures the value is a valid email format
    email: EmailStr

    # AnyUrl ensures the value is a properly formatted URL
    linkedin_url: AnyUrl

    # age must be > 0 and < 120
    # Pydantic will automatically convert compatible types (e.g., "30" → 30)
    age: int = Field(gt=0, lt=120)

    # weight must be strictly a float (strict=True prevents int → float conversion)
    # gt=0 ensures weight is positive
    weight: Annotated[float, Field(gt=0, strict=True)]

    # married is a boolean
    # default=None makes it optional
    # description is for documentation
    married: Annotated[
        bool,
        Field(default=None, description='Is the patient married or not')
    ]

    # Optional[List[str]] means:
    # - Can be None OR a list of strings
    # max_length=5 means list can contain at most 5 items
    allergies: Annotated[
        Optional[List[str]],
        Field(default=None, max_length=5)
    ]

    # Dictionary where:
    # key = string (e.g., "phone")
    # value = string (e.g., "1234567890")
    contact_details: Dict[str, str]


# -------------------------------
# Function using the model
# -------------------------------
def update_patient_data(patient: Patient):
    """
    This function accepts only a validated Patient object.
    By the time it runs, data is already:
    - Type checked
    - Validated
    - Cleaned
    """

    print(patient.name)        # Access validated name
    print(patient.age)         # Age is guaranteed to be int within range
    print(patient.allergies)   # Can be None or list
    print(patient.married)     # Can be True/False/None
    print('updated')


# -------------------------------
# Input Data (raw / untrusted)
# -------------------------------
patient_info = {
    'name': 'nitish',
    'email': 'abc@gmail.com',
    'linkedin_url': 'http://linkedin.com/1322',
    
    # Note: age is string → Pydantic will convert it to int automatically
    'age': '30',
    
    'weight': 75.2,

    # allergies and married are omitted → default = None
    'contact_details': {
        'phone': '2353462'
    }
}


# -------------------------------
# Creating Model Instance
# -------------------------------
# This is where validation happens
# If anything is invalid → ValidationError is raised
patient1 = Patient(**patient_info)


# -------------------------------
# Using the validated object
# -------------------------------
update_patient_data(patient1)