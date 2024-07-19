from django.db import models
from django.contrib.postgres.fields import ArrayField

class Algorithm(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    grid = models.ForeignKey('Grid', on_delete=models.CASCADE)
    nodes = ArrayField(models.IntegerField(), default=list)
    edges = ArrayField(models.IntegerField(), default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def get_nodes(self):
        return Node.objects.filter(id__in=self.nodes)

    def get_edges(self):
        return Edge.objects.filter(id__in=self.edges)

    def add_node(self, node):
        self.nodes.append(node.id)
        self.save()

    def add_edge(self, edge):
        self.edges.append(edge.id)
        self.save()

    def remove_node(self, node):
        self.nodes.remove(node.id)
        self.save()

    def remove_edge(self, edge):
        self.edges.remove(edge.id)
        self.save()
