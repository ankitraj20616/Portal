from django.http import HttpRequest
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes  = [AllowAny]

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request: HttpRequest):
        response = {
            'statue': 'Request  was permitted'
        }
        return Response(response)

# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def protected_view(request):
#     return Response({
#         "status": "Request was permitted",
#         "user": request.user.username
#     })