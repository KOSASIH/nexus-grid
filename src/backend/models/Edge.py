from django.db import models

class Edge(models.Model):
    node_from = models.ForeignKey('Node', on_delete=models.CASCADE, related_name='edges_from')
    node_to = models.ForeignKey('Node', on_delete=models.CASCADE, related_name='edges_to')
    weight = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Edge from {self.node_from} to {self.node_to}"
