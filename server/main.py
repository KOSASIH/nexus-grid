import os
import json
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///nexus_grid.db"
db = SQLAlchemy(app)

@app.route("/api/grid", methods=["GET"])
def get_grid():
    # Return the Nexus Grid data in JSON format
    grid_data = db.session.query(GridData).all()
    return jsonify([grid.to_dict() for grid in grid_data])

@app.route("/api/grid", methods=["POST"])
def create_grid():
    # Create a new Nexus Grid entry
    data = request.get_json()
    grid = GridData(**data)
    db.session.add(grid)
    db.session.commit()
    return jsonify(grid.to_dict())

if __name__ == "__main__":
    app.run(debug=True)
