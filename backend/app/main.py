"""Unified Building Energy Intelligence Platform — Yuva Yodha Challenge 02."""
from flask import Flask, jsonify
from flask_cors import CORS
from app.core.config import settings
from app.api.auth import auth_bp
from app.api.bff import bff_bp
from app.modules.occupancy_hvac.router import occupancy_bp
from app.modules.digital_twin.router import digital_twin_bp
from app.modules.fault_detection.router import fault_bp
from app.modules.grid_solar.router import grid_bp
from app.modules.xai_nlq.router import xai_bp
from app.modules.tenant_gamification.router import tenant_bp

def create_app():
    app = Flask(__name__)
    CORS(app, origins=settings.CORS_ORIGINS, supports_credentials=True)
    app.register_blueprint(auth_bp, url_prefix="/api/v1/auth")
    app.register_blueprint(bff_bp, url_prefix="/api/v1/bff")
    app.register_blueprint(occupancy_bp, url_prefix="/api/v1/occupancy")
    app.register_blueprint(digital_twin_bp, url_prefix="/api/v1/digital-twin")
    app.register_blueprint(fault_bp, url_prefix="/api/v1/faults")
    app.register_blueprint(grid_bp, url_prefix="/api/v1/grid-solar")
    app.register_blueprint(xai_bp, url_prefix="/api/v1/xai")
    app.register_blueprint(tenant_bp, url_prefix="/api/v1/tenant")

    @app.get("/health")
    def health():
        return jsonify({"status": "ok", "service": "unified-bms", "version": "1.2.0", "challenge": "02-smart-buildings"})

    @app.get("/")
    def root():
        return jsonify({
            "name": "Unified Building Energy Intelligence Platform",
            "event": "Yuva Yodha Energy Tech Hackathon",
            "track": "Challenge 02 — Smart Buildings",
            "sponsor": "Schneider Electric",
            "health": "/health",
            "api": "/api/v1",
        })

    return app

app = create_app()
