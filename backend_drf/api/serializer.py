from django.contrib.auth.models import User
from  rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8,  # ✅ Enforce minimum length
        style={'input_type': 'password'},  # 👈 This makes it hidden in DRF browsable API
        error_messages={
            'min_length': 'Password must be at least 8 characters long.'
        }
    )
    class Meta:
        model = User
        fields  = ['username','password','email']

    def create(self, validated_data):
        # User.object.create = save the password in plain text
        # User.object.create_user = automatically hash  the password
        # user = User.objects.create_user(**validated_data) 
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['password'],
            validated_data['email']
        )
        # return super().create(validated_data)
        return user