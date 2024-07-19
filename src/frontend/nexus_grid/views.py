# nexus_grid/views.py
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Data
from .serializers import DataSerializer

class DataView(APIView):
    def get(self, request):
        data = Data.objects.all()
        serializer = DataSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
